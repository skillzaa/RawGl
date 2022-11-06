import getClrObj from "../../color/getClrObj.js";
import GlUtil from "../../core/glUtil.js";
import upload515ToTriCont from "../upload515ToTriCont.js";
import BaseTriComp from "../../core/baseTriComp.js";
import polygon from "../col/polygon.js";
const gl = GlUtil.getGl("bilza");
const clr = getClrObj(1);
const clr2 = getClrObj(1, 0, 1);
const comp = new BaseTriComp();
function p(steps = 3) {
    const triangles = polygon(0, 0, 0.5, 0.5, steps, clr2);
    const comp = new BaseTriComp();
    upload515ToTriCont(triangles, comp);
    comp.init(gl);
    return comp;
}
let steps = 3;
setInterval(function () {
    const comp = p(steps);
    steps += 1;
    GlUtil.clear(gl, 0.2, 0.2, 0.2);
    comp.draw(gl);
}, 1000);
