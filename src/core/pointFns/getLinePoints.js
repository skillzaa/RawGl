import perc2glCoord from "../perc2glCoord.js";
export default function getLinePoints(x1 = 0, x2 = 100, gap = 10) {
    const retArray = [];
    const delta = x2 - x1;
    const steps = 100 / gap;
    for (let i = 0; i < steps; i++) {
        const x = x1 + (delta / 100 * i);
        retArray.push(perc2glCoord(x));
        retArray.push(perc2glCoord(50));
        retArray.push(20);
        retArray.push(1);
        retArray.push(0);
        retArray.push(0);
    }
    return retArray;
}
