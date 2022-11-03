import { getClrObj } from "./moduleAssets/assets.js";
import GlUtil from "./core/glUtil.js";
import upload515ToTriCont from "./primtives/upload515ToTriCont.js";
import TriComp from "./core/triComp.js";
import tri from "./primtives/col/tri.js";
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl, 0.2, 0.2, 0.2);
let triangles = tri(0, 0, 50, 0, 50, 50, getClrObj(1));
draw(triangles);
function draw(triangles) {
    const comp = new TriComp();
    upload515ToTriCont(triangles, comp);
    comp.init(gl);
    comp.draw(gl);
}
