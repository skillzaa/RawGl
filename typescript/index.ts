// import {getClrObj, TriContainer } from "./moduleAssets/assets.js";
import GlUtil from "./core/glUtil.js";
import {Primtives,upload515ToTriCont,TriangleFifteen} from "./primtives/primtives.js";
import getClrObj from "./color/getClrObj.js"
////////////////////////////////////////////////

import TriContComp from "./core/triContComp.js";
//----primtives

////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);

//////////////////////////////////////
const container = new TriContComp(0,0,50,50);
container.addTri(0,0,    50,0,      50,50,     1,0,0);

GlUtil.clear(gl,0.3,0.3,0.3);
container.init(gl);
container.update(gl);
container.draw(gl);

console.log("container",container);
///////////////////