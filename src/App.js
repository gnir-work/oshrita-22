import React, { useState } from "react";
import { Egg } from "./components/Egg";
import "./App.css";
import { Target } from "./components/Target";

const EGGS = [
    {
        left: 200,
        top: 300,
        width: 50,
        height: 66,
        cracks: 0,
    },
    {
        left: 400,
        top: 300,
        width: 50,
        height: 66,
        cracks: 0,
    },
    {
        left: 600,
        top: 300,
        width: 50,
        height: 66,
        cracks: 0,
    },
];

const checkHit = (egg, shootLocation) => {
    const eggLeft = egg.left - egg.width;
    const eggTop = egg.top - egg.height;
    const eggRight = egg.left + egg.width;
    const eggBottom = egg.top + egg.height;
    return (
        eggLeft < shootLocation.x &&
        shootLocation.x < eggRight &&
        eggTop < shootLocation.y &&
        shootLocation.y < eggBottom
    );
};

function App() {
    const [eggs, setEggs] = useState(EGGS);

    const handleShoot = (shootLocation) => {
        const newEggs = eggs.map((egg) => ({
            ...egg,
            cracks: checkHit(egg, shootLocation) ? egg.cracks + 1 : egg.cracks,
        }));
        setEggs(newEggs);
    };

    return (
        <content>
            {eggs.map(({ cracks, left, top, width, height }) => (
                <Egg numOfCracks={cracks} left={left} top={top} width={width} height={height} />
            ))}
            <Target onShoot={handleShoot} />
        </content>
    );
}

export default App;
