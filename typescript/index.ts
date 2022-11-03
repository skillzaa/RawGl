import {getClrObj } from "./moduleAssets/assets.js";
import GlUtil from "./core/glUtil.js";
import TriangleFifteen from "./primtives/triangleFifteen.js";
////////////////////////////////////////////////
import upload515ToTriCont from "./primtives/upload515ToTriCont.js";
import TriComp from "./core/triComp.js";
//----primtives
import tri from "./primtives/col/tri.js";
import rect from "./primtives/col/rect.js";
import rectWH from "./primtives/col/rectWH.js";
import diagonal from "./primtives/col/diagonal.js";
import polygon from "./primtives/col/polygon.js";
import triRtR from "./primtives/extended/triRtR.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);
//////////////////////////////////////
// const triangles = polygon(0,0,   50,0  , 6 , getClrObj(1) );
// draw(triangles);

let triangles = triRtR(50,50, 40,40,   getClrObj(1));
draw(triangles);


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////


function draw(triangles :TriangleFifteen[]){
const comp = new TriComp();
upload515ToTriCont(triangles,comp);    
    comp.init(gl);
    comp.draw(gl);
}


//////////////////////////////////////////////////
