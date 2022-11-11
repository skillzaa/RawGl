import tri from "./col/tri.js";
import rect from "./col/rect.js";
import rectWH from "./col/rectWH.js";
import diagonal from "./col/diagonal.js";
import polygon from "./col/polygon.js";
import line from "./col/line.js";
import triRtR from "./extended/triRtR.js";
import triRtL from "./extended/triRtL.js";
import triRtLInv from "./extended/triRtLInv.js";
export default class Primtive {
    static triRtR: typeof triRtR;
    static triRtL: typeof triRtL;
    static triRtLInv: typeof triRtLInv;
    static rect: typeof rect;
    static rectWH: typeof rectWH;
    static diagonal: typeof diagonal;
    static polygon: typeof polygon;
    static line: typeof line;
    static tri: typeof tri;
}
//# sourceMappingURL=primitives.d.ts.map