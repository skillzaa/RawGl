import ClrObj from "../../color/clrObj.js";
import TriangleFifteen from "../../primtives/triangleFifteen.js";
export default class Add {
    private triangles;
    constructor();
    tri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, clr: ClrObj): void;
    diagonal(x1: number, y1: number, x2: number, y2: number, lineWidth: number, clr: ClrObj): void;
    rect(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, clr: ClrObj): void;
    rectWH(x: number, y: number, width: number, height: number, clr: ClrObj): void;
    polygon(x: number | undefined, y: number | undefined, width: number | undefined, height: number | undefined, steps: number | undefined, clr: ClrObj): void;
    getDb(): TriangleFifteen[];
}
//# sourceMappingURL=add.d.ts.map