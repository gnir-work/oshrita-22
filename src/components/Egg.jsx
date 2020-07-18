import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { random } from "lodash";

import "./Egg.scss";
import { MAX_NUMBER_OF_CRACKS } from "../consts";

export const Egg = ({
    className,
    left,
    top,
    width,
    height,
    cracks,
    color,
}) => {
    const [isShaking, setIsShaking] = useState(false);

    useEffect(() => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 500);
    }, [cracks]);

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
                    backgroundColor: color,
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
