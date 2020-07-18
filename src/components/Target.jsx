import React from "react";
import { ReactComponent as TargetIcon } from "../svg/target.svg";
import { TARGET_SIZE } from "../consts";

import "./Target.scss";

export const Target = ({ onShoot, position }) => {
    return (
        <TargetIcon
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            width={TARGET_SIZE}
            height={TARGET_SIZE}
            className="target-icon"
        />
    );
};
