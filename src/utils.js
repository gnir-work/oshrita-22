import { random, clamp } from "lodash";
import { EGG_MAX_SPEED } from "./consts";

export const checkHit = (egg, shootLocation) => {
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

export const getRandomSpeed = (currentSpeed) => {
    let magnifier = random(-1, 1, true);
    return {
        x: clamp(currentSpeed.x + magnifier, -EGG_MAX_SPEED, EGG_MAX_SPEED),
        y: clamp(currentSpeed.y + magnifier, -EGG_MAX_SPEED, EGG_MAX_SPEED),
    };
};

export const getNextEggLocation = (egg) => ({
    left:
        (window.innerWidth - 100 + egg.left + egg.speed.x) %
        (window.innerWidth - 100),
    top:
        (window.innerHeight - 100 + egg.top + egg.speed.y) %
        (window.innerHeight - 100),
});
