import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./Egg.scss";

export const Egg = ({
    className,
    x,
    y,
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
                left: `${x}px`,
                top: `${y}px`,
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
