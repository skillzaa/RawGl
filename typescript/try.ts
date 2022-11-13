import CoreFragComp from "./coreFrag/coreFragComp.js";
import { GlUtil } from "./rawGl.js";

///////////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");

// const vertices :number[] = [-1, -1, 1, -1, -1, 1, 1, 1];

const comp = new CoreFragComp();

GlUtil.clear(gl,0.2,0.2,0.2);

comp.update(gl);
comp.draw(gl);

GlUtil.info(gl);