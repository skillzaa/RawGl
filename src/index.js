import CoreTriContainer from "./coreComps/coreTriContainer.js";
import GlUtil from "./core/glUtil.js";
const gl = GlUtil.getGl("bilza");
const core = new CoreTriContainer(gl, 0, 50, 50, 50);
core.init(gl);
GlUtil.clear(gl, 0, 0, 1);
core.draw(gl);
console.log("core", core);
