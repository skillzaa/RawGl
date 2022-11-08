import {GlUtil,TriCont} from "../src/rawGl.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");

//////////////////////////////////////
/*
This function will draw a grid of 10 X 10 squares.
*/
function grid(){
/**
 * Try changing the x,y, width and height of TriCont
 */    
const comp = new TriCont(10,10,80,80);
//-------------------
let y = 0;
for (let outer = 0; outer < 10; outer++) {

    for (let inner = 0; inner < 10; inner++) {
        comp.add.rectWH(
            inner * 10 ,y,  // location x and y
            10,10,      // width and height
        Math.random(),Math.random(),Math.random() );
    }
y += 10;    
}    
GlUtil.clear(gl,0.3,0.2,0.2);
comp.init(gl);
comp.draw(gl);
}
////////////////////////////////////////
setInterval(function(){
    grid();
}, 1000);