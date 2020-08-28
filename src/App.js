import React, { useState, useEffect, useCallback, useRef } from "react";
import { Egg } from "./components/Egg";
import { Target } from "./components/Target";
import Card from "./components/Card";
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
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [shownParagraphs, setShownParagraphs] = useState([]);
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
        if (isCardOpen) {
            const eggsInterval = setInterval(moveEggs, 20);
            return () => {
                clearInterval(eggsInterval);
            };
        }
    }, [moveEggs, isCardOpen]);

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
        
        const deadEggsIndex = [];
        
        for (const egg of newEggs) {
            if (!aliveEggs.includes(egg)) {
                deadEggsIndex.push(newEggs.indexOf(egg));
            }
        }

        setShownParagraphs([...shownParagraphs, ...deadEggsIndex]);
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
        if (event.keyCode === ENTER) {
            event.preventDefault();
            event.stopPropagation();
            shoot();
        } else {
            // Ignore unsupported keys.
        }
    };

    const handleMouseMove = (event) => {
        console.log("a");
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const openCard = () => {
        setIsCardOpen(true);
    };

    return (
        <>
            <content
                tabIndex={0}
                onMouseMove={handleMouseMove}
                onKeyDown={handleKeyBoardEvent}
                ref={contentRef}
            >
                {isCardOpen &&
                    eggs.map(
                        ({ cracks, x, y, width, height, color }, index) => (
                            <Egg
                                color={color}
                                key={index}
                                cracks={cracks}
                                x={x}
                                y={y}
                                width={width}
                                height={height}
                            />
                        )
                    )}
                <Target position={position} onShoot={handleShoot} />
                <Card
                    open={isCardOpen}
                    openCard={openCard}
                    shownParagraphs={shownParagraphs}
                />
            </content>
        </>
    );
}

export default App;
