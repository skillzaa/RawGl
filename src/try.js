import CoreFragComp from "./coreFrag/coreFragComp.js";
import { GlUtil } from "./rawGl.js";
const gl = GlUtil.getGl("bilza");
const comp = new CoreFragComp();
GlUtil.clear(gl, 0.2, 0.2, 0.2);
comp.update(gl);
comp.draw(gl);
GlUtil.info(gl);
