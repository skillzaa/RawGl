import GlPack from "./glPack/glPack.js";
import Triangle from "./components/triangle/triangle.js";
import Rgba from "./functions/rgba.js";
const glPack = new GlPack("bilza");
glPack.clear(0.5, 0.3, 0);
const gl = glPack.getGl();
const triangle = new Triangle(gl, [-0.5, -0.5, 0.5, -0.5, 0, 0.5], new Rgba(1, 0, 0));
triangle.draw(gl);
const triangle02 = new Triangle(gl, [-1, -1,
    -0.5, -1,
    -0.5, 1], new Rgba(0, 1, 0));
triangle02.draw(gl);
