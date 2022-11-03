///////////////////////////////////////////////
import tri from "./col/tri.js";
import rect from "./col/rect.js";
import rectWH from "./col/rectWH.js";
import diagonal from "./col/diagonal.js";
import polygon from "./col/polygon.js";
import triRtR from "./extended/triRtR.js";

//----------------------------------------------------------
/**
 * Primtives just exports all the primtives via static functions.
 * - These are THE ONE AND ONLY "tri" (core primtive the place from which all triangle originate and end at addTri of BaseTriComp)
 * - diagonal, rect, rectWH, polygon (4 almost core).
 * - There there are as many "extended" primtive as possible. Extended Primtive must be just one item and thing more than that should be asset. 
 */


export default class Primtive {

static triRtR = triRtR;




/////////////////////-Extended Core 4 memebers
static rect = rect;
static rectWH = rectWH;
static diagonal = diagonal;
static polygon = polygon;
///////////////////////////////////////////////////////
static tri = tri; // --- The ultimate core
///////////////////////////////////////////////////////
}
