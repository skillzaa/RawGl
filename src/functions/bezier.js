export default function bezier(t, initial, p1, p2, final) {
    return (1 - t) * (1 - t) * (1 - t) * initial
        +
            3 * (1 - t) * (1 - t) * t * p1
        +
            3 * (1 - t) * t * t * p2
        +
            t * t * t * final;
}
export function bezier02(t, P1, P2, P3, P4) {
    const invT = (1 - t);
    const P = P1 * invT ^ 3 +
        P2 * 3 * t * invT ^ 2 +
        P3 * 3 * invT * t ^ 2 +
        P4 * t ^ 3;
    return P;
}
export function lerp(pt1, pt2, t) {
    if (t > 1) {
        throw new Error("t can not be greater than 1 in a lerp function");
    }
    return pt1 + ((pt2 - pt1) * t);
}
