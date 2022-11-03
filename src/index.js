import { getClrObj } from "./moduleAssets/assets.js";
import GlUtil from "./core/glUtil.js";
import TriComp from "./core/triComp.js";
import upload515ToTriCont from "./primtives/upload515ToTriCont.js";
import Primtive from "./primtives/primitive.js";
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl, 0.2, 0.2, 0.2);
let triangles = Primtive.tri(0, 80, 10, 80, 10, 90, getClrObj(1));
draw(triangles);
triangles = Primtive.rect(15, 80, 20, 80, 20, 90, getClrObj(0, 1));
draw(triangles);
triangles = Primtive.rectWH(25, 80, 20, 10, getClrObj(1, 1));
draw(triangles);
triangles = Primtive.polygon(70, 70, 15, 15, 6, getClrObj(0.9, 0));
draw(triangles);
triangles = Primtive.polygon(70, 30, 15, 15, 120, getClrObj(1, 1));
draw(triangles);
triangles = Primtive.rectWH(10, 15, 30, 30, getClrObj(1, 1, 0));
draw(triangles);
triangles = Primtive.diagonal(10, 20, 40, 40, 5, getClrObj(1, 0, 0));
draw(triangles);
triangles = Primtive.diagonal(10, 40, 40, 20, 5, getClrObj(0, 0, 1));
draw(triangles);
function draw(triangles) {
    const comp = new TriComp();
    upload515ToTriCont(triangles, comp);
    comp.init(gl);
    comp.draw(gl);
}
