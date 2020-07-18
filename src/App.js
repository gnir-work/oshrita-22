import React, { useState, useEffect, useCallback } from "react";
import { Egg } from "./components/Egg";
import { Target } from "./components/Target";
import EGGS from "./eggs";
import { getRandomSpeed, checkHit, getNextEggLocation } from "./utils";

import "./App.css";

function App() {
    const [eggs, setEggs] = useState(EGGS);

    const moveEggs = useCallback(() => {
        const newEggs = eggs.map((egg) => ({
            ...egg,
            ...getNextEggLocation(egg),
            speed: getRandomSpeed(egg.speed),
        }));
        setEggs(newEggs);
    }, [eggs]);

    useEffect(() => {
        const eggsInterval = setInterval(moveEggs, 20);
        return () => {
            clearInterval(eggsInterval);
        };
    }, [moveEggs]);

    const handleShoot = (shootLocation) => {
        const newEggs = eggs.map((egg) => ({
            ...egg,
            cracks: checkHit(egg, shootLocation) ? egg.cracks + 1 : egg.cracks,
        }));
        setEggs(newEggs);
    };

    return (
        <content>
            {eggs.map(({ cracks, left, top, width, height, color }, index) => (
                <Egg
                    color={color}
                    key={index}
                    numOfCracks={cracks}
                    left={left}
                    top={top}
                    width={width}
                    height={height}
                />
            ))}
            <Target onShoot={handleShoot} />
        </content>
    );
}

export default App;
