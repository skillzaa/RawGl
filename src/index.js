import GlPack from "./glPack/glPack.js";
import Triangle from "./components/triangle/triangle.js";
import Rgba from "./functions/rgba.js";
import perc2glCoord from "./functions/perc2glCoord.js";
const glPack = new GlPack("bilza");
glPack.clear(0.5, 0.3, 0);
const gl = glPack.getGl();
const triangle = new Triangle(gl, 0, 0, 50, 0, 50, 100, new Rgba(1, 0, 0));
function draw() {
    glPack.clear(0.2, 0.1, 0);
    triangle.draw(gl);
    requestAnimationFrame(draw);
}
draw();
console.log("perc2glCoord-0", perc2glCoord(0));
console.log("perc2glCoord-25", perc2glCoord(25));
console.log("perc2glCoord-50", perc2glCoord(50));
console.log("perc2glCoord-75", perc2glCoord(75));
console.log("perc2glCoord-100", perc2glCoord(100));
