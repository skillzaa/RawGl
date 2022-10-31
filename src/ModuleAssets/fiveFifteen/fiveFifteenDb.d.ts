import { ClrObj } from "../assets.js";
export default class FiveFifteenDb {
    private triangles;
    constructor();
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, clr: ClrObj): void;
    addRect(x: number, y: number, width: number | undefined, height: number | undefined, clr: ClrObj): void;
    addRectVer(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, clr: ClrObj): void;
    addDiagonal(y1: number | undefined, y2: number | undefined, lineWidth: number | undefined, clr: ClrObj): void;
    private uploadData;
}
//# sourceMappingURL=fiveFifteenDb.d.ts.map