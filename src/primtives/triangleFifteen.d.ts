import ClrObj from "../color/clrObj.js";
export default class TriangleFifteen {
    private readonly _x1;
    private readonly _y1;
    private readonly _x2;
    private readonly _y2;
    private readonly _x3;
    private readonly _y3;
    private clr;
    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, clr: ClrObj);
    x1(): number;
    y1(): number;
    x2(): number;
    y2(): number;
    x3(): number;
    y3(): number;
    r(): number;
    g(): number;
    b(): number;
    setClr(r?: number, g?: number, b?: number): void;
    getClr(): ClrObj;
}
//# sourceMappingURL=triangleFifteen.d.ts.map