import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { random } from "lodash";

import "./Egg.scss";
import { MAX_NUMBER_OF_CRACKS } from "../consts";


export const Egg = ({ className, left, top, width, height, numOfCracks }) => {
    const [cracks, setCracks] = useState([]);
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        if (cracks.length === MAX_NUMBER_OF_CRACKS || numOfCracks === 0) {
            return;
        }

        let crack = random(1, MAX_NUMBER_OF_CRACKS);
        while (cracks.includes(crack)) {
            crack = random(1, MAX_NUMBER_OF_CRACKS);
        }

        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 500);
        
        setCracks([...cracks, crack]);
    }, [numOfCracks]);

    return (
        <div
            className="egg-container"
            style={{
                left: `${left}px`,
                top: `${top}px`,
            }}
        >
            <div
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                }}
                className={classNames("egg", className, {
                    "shake-animation": isShaking,
                })}
            >
                {cracks.map((crackNumber) => (
                    <div
                        key={crackNumber}
                        style={{ width: `${width}px`, height: `${height}px` }}
                        className={`crack crack${crackNumber}`}
                    />
                ))}
            </div>
        </div>
    );
};
