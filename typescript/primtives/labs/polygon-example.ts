import {getClrObj } from "../../moduleAssets/assets.js";
import GlUtil from "../../core/glUtil.js";
////////////////////////////////////////////////
import upload515ToTriCont from "../upload515ToTriCont.js";
import BaseTriComp from "../../core/baseTriComp.js";
//----primtives
import tri from "../col/tri.js";
import rect from "../col/rect.js";
import rectWH from "../col/rectWH.js";
import diagonal from "../col/diagonal.js";
import polygon from "../col/polygon.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
//////////////////////////////////////
// const v = 10;
const clr =  getClrObj(1);
const clr2 =  getClrObj(1,0,1);
// const triangles = tri(-1,-1,    0,-1,    0,0,   clr);
// const triangles = rect(-1,-1,    0,-1,    0,0,   clr);
// const triangles = rectWH(-1,-1, 1,1,   clr);
// const triangles = diagonal(-1,-0.5,  1,0.5,  0.2,clr);
// const triangles = diagonal( -0.5,-0.5,  0.5,0.5,  0.2,clr);
// const triangles2 = diagonal( -0.5,-0.5,  0.5,0.5,  0.5,clr2);
// const triangles = polygon(0,0,0.5,0.5,60,clr2);
// clr.set(0,1,0);
//////////////////////////////////////
const comp = new BaseTriComp();
// const comp2 = new BaseTriComp();
//////////////////////////////////////
// upload515ToTriCont(triangles,comp);
// upload515ToTriCont(triangles,comp);
//////////////////////////////////////
// comp.init(gl);
// comp.init(gl);
// comp.draw(gl);
function p (steps :number=3){
const triangles = polygon(0,0,0.5,0.5,steps,clr2);
const comp = new BaseTriComp();
upload515ToTriCont(triangles,comp);
comp.init(gl);
return comp;
}
let steps = 3;

setInterval(function(){
const comp = p(steps);    
steps+=1;
GlUtil.clear(gl,0.2,0.2,0.2);
comp.draw(gl);

},1000);

//////////////////////////////////////////////////
