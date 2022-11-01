import TriContainer from "../triContainer.js";
import GlUtil from "../glUtil.js";

const gl = GlUtil.getGl("bilza");
///////////////////////////////////////////////
const first = new TriContainer(0,80, 40,40);
///////////////////--Drawing Area---/////////////////
/////////////////////////////////////////////////////////

//--top left triangle
first.addTri(0,100,    50,100,  0,50); //red clr given by addTri fn
//--top left triangle
first.addTri(50,100,  100,100,   100,50,      0,1,0);
//--lower left triangle
first.addTri(0,0,    0,50,  50,0,             0,0,1);
//--lower right triangle
first.addTri(50,0,  100,50,   100,0,             1,1,0);
///////////////////--drawing ends here---/////////////////
/////////////////////////////////////////////////////////
//-----clear the canvas
GlUtil.clear(gl,0.2,0.2,0.6);
//------------ init / update and draw
first.init(gl);
//--The init will run update but if we  change (width,height,x,y etc) then we need to update again

//--lets make changes
//--Remeber you can not change color
first.y = 60;
first.x = 30;
//--now update again
first.update(gl);
first.draw(gl);




