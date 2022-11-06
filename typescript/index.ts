// import {getClrObj, TriContainer } from "./moduleAssets/assets.js";
import GlUtil from "./core/glUtil.js";
import Primtives from "./primtives/primitives.js";
import getClrObj from "./color/getClrObj.js"
////////////////////////////////////////////////
import TriContComp from "./core/triContComp.js";
import Sq2x2 from "./assets/sq2X2.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);
//////////////////////////////////////
const container = new Sq2x2(0,0,25,25);
///////////////////////////////////////////////
const comp= container.getAsset();
///////////////////////////////////////////////

comp.init(gl);
////////////////////////////////////////
const inter = setInterval(function(){
    
GlUtil.clear(gl,0.3,0.3,0.3);
comp.update(gl);
comp.draw(gl);
    if (comp.width >100 || comp.height > 100){
        clearInterval(inter)
    }else {
        comp.width +=0.5;
        comp.height +=0.5;
    }
}, 20);
////////////////////////////////////////