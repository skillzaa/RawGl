import CoreTriContainer from "./coreComps/coreTriContainer.js";
import engine from "./core/rawGl.js";
import GlUtil from "./core/glUtil.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");

const core = new CoreTriContainer( gl,0,50,50,50);
////////////////////////////////////////////////
// core.bgVertices.addTriangle(0,0, 100,100, 0,100,       0.3,0,0);
// core.bgVertices.addTriangle(100,100,  100,0,  0,0,   0.3,0,0);

// core.bgVertices.addTriangle(100,100,0,100,0,0,   0.3,0,0);    
///////////////////////////////
// core.vertices.addTriangle(0,0, 50,0, 25,100,    0,1,0);
// core.vertices.addTriangle(50,0, 100,0, 75,100, 0,0,1);
// core.vertices.addTriangle(10,10, 30,10, 15,30,    1,0,0);

// core.vertices.addTriangle(50,0, 100,0, 50, 100,   0,1,0);
// core.vertices.addTriangle(40,0,   60,0,   50,70,   0,1,1);
core.init(gl);
// core.update(gl);
GlUtil.clear(gl,0,0,1);
core.draw( gl );

console.log("core", core );
