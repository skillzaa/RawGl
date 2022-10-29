import BaseCoreComp from "./coreComps/baseCoreComp.js";
import Engine from "./core/rawGl.js";
const engine = new Engine("bilza");
const vertexShaderSrc = `
attribute highp vec2 a_pos;
void main(void) {
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
}
`;
const fragShaderSrc = `
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
`;
const comp = new BaseCoreComp();
comp.addTriangle(25, 50, 50, 75, 50, 50);
comp.addTriangle(25, 50, 50, 25, 50, 50);
comp.init(engine.gl(), vertexShaderSrc, fragShaderSrc);
comp.setAttribute(engine.gl(), "a_pos", 2, 4 * 2, 0);
const u_ColorLoc = comp.getUniformLocation(engine.gl(), "u_Color");
engine.gl().uniform3fv(u_ColorLoc, [0, 0, 1]);
setInterval(function () {
    comp.update();
    engine.clear(0, 0.3);
    comp.draw(engine.gl());
}, 20);
console.log("gl", engine.gl());
