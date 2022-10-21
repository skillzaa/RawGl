import GlPack from "./glPack/glPack.js";
import verShaderFirst from "./shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "./shaders/fragment/fragShaderFirst.js";

/////////////////////////////////////////////
const glPack = new GlPack("bilza");
glPack.clear(0.5,0.3,0);
glPack.addVertices([-0.5, -0.5, 0.5, -0.5, 0, 0.5]);
////////////////////////////////////////////////////
glPack.createProgram( verShaderFirst() ,fragShaderFirst() );

glPack.setVertexPosition();
glPack.draw();
// //--WAITING FOR THE UNKNOWN
