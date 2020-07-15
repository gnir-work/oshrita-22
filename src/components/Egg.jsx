import React, { useState } from "react";
import _, { random } from "lodash";

import "./Egg.scss";

const NUMBER_OF_CRACKS = 5;

export const Egg = () => {
    const [cracks, setCracks] = useState([]);
    const [isShaking, setIsShaking] = useState(false);

    const handleHit = () => {
        if (cracks.length === NUMBER_OF_CRACKS) {
            return;
        }
        let crack = random(1, NUMBER_OF_CRACKS);
        while (cracks.includes(crack)) {
            crack = random(1, NUMBER_OF_CRACKS);
        }
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 500);
        setCracks([...cracks, crack]);
    };

    return (
        <div
            onClick={handleHit}
            className={`egg ${isShaking ? "shake-animation" : ""}`}
        >
            {cracks.map((crackNumber) => (
                <div className={`crack crack${crackNumber}`} />
            ))}
        </div>
    );
};
