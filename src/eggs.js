import { random } from "lodash";
import { EGG_WIDTH, EGG_HEIGHT } from "./consts";

export default [
    {
        left: 200,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
        color: "white"
    },
    {
        left: 400,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
        color: "red"
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "blue"
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "orange"
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "blue"
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "green"
    },
    {
        left: 600,
        top: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: 0,
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "darkred"
    },
];
