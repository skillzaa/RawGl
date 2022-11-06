import { getClrObj } from "../moduleAssets/assets.js";
import GlUtil from "../core/glUtil.js";
import TriComp from "../core/triComp.js";
import upload515ToTriCont from "../primtives/upload515ToTriCont.js";
import Primtive from "../primtives/primitives_list.js";
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl, 0.2, 0.2, 0.2);
function grid(r, g, b) {
    const comp = new TriComp();
    for (let i = 0; i < 10; i++) {
        const triangles = Primtive.rectWH(i * 10, 0, 0.25, 100, getClrObj(r, g, b));
        upload515ToTriCont(triangles, comp);
    }
    for (let i = 0; i < 10; i++) {
        const triangles = Primtive.rectWH(0, i * 10, 100, 0.25, getClrObj(r, g, b));
        upload515ToTriCont(triangles, comp);
    }
    comp.init(gl);
    comp.draw(gl);
}
grid(1, 1, 0);
function draw(tri) {
    const comp = new TriComp();
    upload515ToTriCont(tri, comp);
    comp.init(gl);
    comp.draw(gl);
}
