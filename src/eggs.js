import { random } from "lodash";
import { EGG_WIDTH, EGG_HEIGHT } from "./consts";

export default [
    {
        x: 200,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
        color: "white"
    },
    {
        x: 400,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(2, 5, true),
            y: random(2, 5, true),
        },
        color: "red"
    },
    {
        x: 600,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "blue"
    },
    {
        x: 600,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "orange"
    },
    {
        x: 600,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "blue"
    },
    {
        x: 600,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "green"
    },
    {
        x: 600,
        y: 300,
        width: EGG_WIDTH,
        height: EGG_HEIGHT,
        cracks: [],
        speed: {
            x: random(-5, 5, true),
            y: random(-5, 5, true),
        },
        color: "darkred"
    },
];
