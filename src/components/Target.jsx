import React, { useRef, useEffect, useState } from "react";
import _ from "lodash";
import { ReactComponent as TargetIcon } from "../svg/target.svg";

import "./Target.scss";

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

const DIRECTION_TO_VECTOR = {
    [LEFT]: {
        left: -1,
        top: 0,
    },
    [UP]: {
        left: 0,
        top: -1,
    },
    [RIGHT]: {
        left: 1,
        top: 0,
    },
    [DOWN]: {
        left: 0,
        top: 1,
    },
};

const SPEED = 2;
const TARGET_SIZE = 50;

export const Target = ({ onShoot, position }) => {

    // const move = (vector) => {
    //     const newPosition = {
    //         left: _.clamp(position.left + vector.left * SPEED, 5, 95),
    //         top: _.clamp(position.top + vector.top * SPEED, 5, 95)
    //     };
    //     setPosition(newPosition);
    // };

    const shoot = ({ x, y }) => {
        const shootLocation = {
            x: x + TARGET_SIZE / 2,
            y: y + TARGET_SIZE / 2
        }
        onShoot(shootLocation);
    }

    // const handleKeyBoardEvent = (event) => {
    //   if (event.keyCode === ENTER) {
    //         shoot(event.target.getBoundingClientRect());
    //     } else if (DIRECTION_TO_VECTOR[event.keyCode]) {
    //         const vector = DIRECTION_TO_VECTOR[event.keyCode];
    //         move(vector);
    //     } else {
    //         // Ignore unsupported keys.
    //     }
    // };

    return (
        <TargetIcon
            style={{ left: `${position.left}px`, top: `${position.top}px` }}
            width={TARGET_SIZE}
            height={TARGET_SIZE}
            className="target-icon"
        />
    );
};
