import React, { useState, useEffect, useCallback } from "react";
import { Egg } from "./components/Egg";
import "./App.css";
import { Target } from "./components/Target";
import { random, clamp } from "lodash";

const EGG_WIDTH = 40;
const EGG_HEIGHT = 53;

const EGGS = [
    {
        left: 200,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
    },
    {
        left: 400,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
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

const getRandomSpeed = (currentSpeed) => {
    let magnifier = random(-1, 1, true);
    return {
        x: clamp(currentSpeed.x + magnifier, -5, 5),
        y: clamp(currentSpeed.y + magnifier, -5, 5),
    };
};

function App() {
    const [eggs, setEggs] = useState(EGGS);

    const moveEggs = useCallback(() => {
        const newEggs = eggs.map((egg) => ({
            ...egg,
            left:
                (window.innerWidth - 100 + egg.left + egg.speed.x) %
                (window.innerWidth - 100),
            top:
                (window.innerHeight - 100 + egg.top + egg.speed.y) %
                (window.innerHeight - 100),
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
            {eggs.map(({ cracks, left, top, width, height }, index) => (
                <Egg
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
