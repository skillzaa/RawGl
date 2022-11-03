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
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);
//////////////////////////////////////
// const triangles = polygon(0,0,   50,0  , 6 , getClrObj(1) );
// draw(triangles);

let triangles = tri(0,0,    50,0,    50,50,   getClrObj(1));
draw(triangles);

// triangles = rect(-1,-1,    0,-1,    0,0,   getClrObj(0,1));
// draw(triangles);
// const triangles = rectWH(-1,-1, 1,1,   clr);
// const triangles = diagonal(-1,-0.5,  1,0.5,  0.2,clr);
// const triangles = diagonal( -0.5,-0.5,  0.5,0.5,  0.2,clr);
// const triangles2 = diagonal( -0.5,-0.5,  0.5,0.5,  0.5,clr2);
// clr.set(0,1,0);
//////////////////////////////////////

// const comp2 = new BaseTriComp();
//////////////////////////////////////

// upload515ToTriCont(triangles,comp);
//////////////////////////////////////
// comp.init(gl);
// comp.init(gl);
// comp.draw(gl);


function draw(triangles :TriangleFifteen[]){
const comp = new TriComp();
upload515ToTriCont(triangles,comp);    
    comp.init(gl);
    comp.draw(gl);
}


//////////////////////////////////////////////////
