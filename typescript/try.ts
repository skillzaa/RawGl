import { TriCont,GlUtil } from "./rawGl.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
//////////////////////////////////////
const comp = new TriCont( 10 , 10 , 80, 80);
//---Mark the Background
comp.add.rectWH(0,0,100,100,0,0,1);

comp.add.tri( 0,0,    50,0,    50,50,  1);
comp.add.tri( 0,100,  0,50,    50,50,  1,1);

comp.add.polygon(80,80,  10,10, 120,  1,0,0);
comp.add.polygon(80,60,  10,10, 6,    1,1,0);
comp.add.polygon(80,40,  10,10, 4,    0,1,0);
comp.add.polygon(80,20,  10,10, 3,    0,1,1);

comp.init(gl);
/////////////////////////////////////
GlUtil.clear(gl,0.2,0.1,0.1);
comp.draw(gl);
