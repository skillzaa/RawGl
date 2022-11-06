import GlUtil from "../../core/glUtil.js";
import upload515ToTriCont from "../../formats/upload515ToTriCont.js";
import getClrObj from "../../color/getClrObj.js";
import Primtives from "../../primtives/primitives.js";
import TriContComp from "../../core/triContComp.js";
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl, 0.2, 0.2, 0.2);
const container = new TriContComp(25, 25, 50, 50);
upload515ToTriCont(Primtives.rectWH(0, 0, 100, 100, getClrObj(0, 1)), container);
upload515ToTriCont(Primtives.diagonal(0, 10, 100, 90, 10, getClrObj(1)), container);
container.init(gl);
setInterval(function () {
    GlUtil.clear(gl, 0.3, 0.3, 0.3);
    container.update(gl);
    container.draw(gl);
    container.width += 1;
}, 500);
