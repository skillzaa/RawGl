import {getClrObj } from "../moduleAssets/assets.js";
import GlUtil from "../core/glUtil.js";
////////////////////////////////////////////////
import TriComp from "../core/triComp.js";
import upload515ToTriCont from "../primtives/upload515ToTriCont.js";
import Primtive from "../primtives/primitives_list.js";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);

//////////////////////////////////////
function grid(){
const comp = new TriComp();
//-------------------
let y = 0;
//--first loop
for (let outer = 0; outer < 10; outer++) {
let x = 0;
    for (let i = 0; i < 10; i++) {
    const triangles = 
    Primtive.rectWH(i * 10 ,y, 10,10     , 
        getClrObj( Math.random(),Math.random(),Math.random()) );
    upload515ToTriCont( triangles ,comp);    
    }
y += 10;    
}    
comp.init(gl);
comp.draw(gl);
}
////////////////////////////////////////
setInterval(function(){
    grid();
}, 1000)