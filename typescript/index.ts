import CoreTriContainer from "./coreComps/coreTriContainer.js";
import engine from "./core/rawGl.js";
import GlUtil from "./core/glUtil.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");

const core = new CoreTriContainer( gl,10,10,50,50);
////////////////////////////////////////////////
core.vertices.addTriangle(0,0,   100,0,   100,100,   1);
core.init(gl);
core.update(gl);
GlUtil.clear(gl,0,0,1);
core.draw( gl );

console.log("core", core );
