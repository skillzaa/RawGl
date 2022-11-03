import tri from "../../primtives/col/tri.js";
import rect from "../../primtives/col/rect.js";
import rectWH from "../../primtives/col/rectWH.js";
import diagonal from "../../primtives/col/diagonal.js";
import polygon from "../../primtives/col/polygon.js";
import triRtR from "../../primtives/extended/triRtR.js";
///////////////////////////////////////////////
import ClrObj from "./clrObj.js";
import getClrObj from "./getClrObj.js";
///////////////////////////////////////////////
import TriangleFifteen from "../../primtives/triangleFifteen.js";
///////////////////////////////////////////////
///////////////////////////////////////////////

export default class Add {
private triangles :TriangleFifteen[];
constructor(){
this.triangles = [];
}
tri(x1 :number,y1:number,x2 :number,y2:number,x3 :number,y3:number,clr :ClrObj){
const t = tri(x1,y1,x2,y2,x3,y3,clr);
this.triangles = this.triangles.concat(t); 
}

//////////////////////////////////////
getDb():TriangleFifteen[]{
return this.triangles;
}
//////////////////////////////////////
//////////////////////////////////////
}