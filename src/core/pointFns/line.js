import perc2glCoord from "../perc2glCoord.js";
export default function getLinePoints() {
    return [
        perc2glCoord(25),
        perc2glCoord(50),
        20,
        1.0, 0.0, 0.0,
        perc2glCoord(50),
        perc2glCoord(50),
        40,
        1.0, 0.0, 0.0,
        perc2glCoord(75),
        perc2glCoord(50),
        60,
        1.0, 0.0, 0.0,
    ];
}
