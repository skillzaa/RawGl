import tri from "./col/tri.js";
import rect from "./col/rect.js";
import rectWH from "./col/rectWH.js";
import diagonal from "./col/diagonal.js";
import polygon from "./col/polygon.js";
import triRtR from "./extended/triRtR.js";
import triRtL from "./extended/triRtL.js";
import triRtLInv from "./extended/triRtLInv.js";
export default class Primtive {
}
Primtive.triRtR = triRtR;
Primtive.triRtL = triRtL;
Primtive.triRtLInv = triRtLInv;
Primtive.rect = rect;
Primtive.rectWH = rectWH;
Primtive.diagonal = diagonal;
Primtive.polygon = polygon;
Primtive.tri = tri;
