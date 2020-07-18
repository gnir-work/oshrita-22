import React, { useState, useEffect, useCallback, useRef } from "react";
import { Egg } from "./components/Egg";
import { Target } from "./components/Target";
import EGGS from "./eggs";
import {
    getRandomSpeed,
    checkHit,
    getNextEggLocation,
    getRandomNumber,
} from "./utils";

import "./App.css";
import { MAX_NUMBER_OF_CRACKS, TARGET_SIZE, ENTER } from "./consts";

function App() {
    const [eggs, setEggs] = useState(EGGS);
    const [position, setPosition] = useState({
        x: 50,
        y: 50,
    });
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.focus();
    }, []);

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
            cracks: checkHit(egg, shootLocation)
                ? [
                      ...egg.cracks,
                      getRandomNumber(egg.cracks, 1, MAX_NUMBER_OF_CRACKS),
                  ]
                : egg.cracks,
        }));
        const aliveEggs = newEggs.filter(
            (egg) => egg.cracks.length < MAX_NUMBER_OF_CRACKS
        );

        setEggs(aliveEggs);
    };

    const shoot = () => {
        const shootLocation = {
            x: position.x + TARGET_SIZE / 2,
            y: position.y + TARGET_SIZE / 2,
        };
        handleShoot(shootLocation);
    };

    const handleKeyBoardEvent = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.keyCode === ENTER) {
            shoot();
        } else {
            // Ignore unsupported keys.
        }
    };

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return (
        <content
            tabIndex={0}
            onMouseMove={handleMouseMove}
            onKeyDown={handleKeyBoardEvent}
            ref={contentRef}
        >
            {eggs.map(({ cracks, x, y, width, height, color }, index) => (
                <Egg
                    color={color}
                    key={index}
                    cracks={cracks}
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                />
            ))}
            <Target position={position} onShoot={handleShoot} />
        </content>
    );
}

export default App;
