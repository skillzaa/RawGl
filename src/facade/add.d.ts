import TriContCompBase from "../core/triContComp.js";
export default class Add {
    private theComp;
    constructor(theComp: TriContCompBase);
    tri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    diagonal(x1: number, y1: number, x2: number, y2: number, lineWidth: number, r?: number, g?: number, b?: number): void;
    rect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    rectWH(x: number, y: number, width: number, height: number, r?: number, g?: number, b?: number): void;
    polygon(x?: number, y?: number, width?: number, height?: number, steps?: number, r?: number, g?: number, b?: number): void;
    private upload;
}
//# sourceMappingURL=add.d.ts.map