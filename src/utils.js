import { random, clamp } from "lodash";
import { EGG_MAX_SPEED } from "./consts";

export const checkHit = (egg, shootLocation) => {
    const eggLeft = egg.x - egg.width;
    const eggTop = egg.y - egg.height;
    const eggRight = egg.x + egg.width;
    const eggBottom = egg.y + egg.height;
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
    x:
        (window.innerWidth - 100 + egg.x + egg.speed.x) %
        (window.innerWidth - 100),
    y:
        (window.innerHeight - 100 + egg.y + egg.speed.y) %
        (window.innerHeight - 100),
});

export const getRandomNumber = (blackList, from, to) => {
    let number = random(from, to);
    while (blackList.includes(number)) {
        number = random(from, to);
    }
    return number;
};
