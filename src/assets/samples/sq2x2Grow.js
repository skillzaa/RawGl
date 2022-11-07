import GlUtil from "../../core/glUtil.js";
import AC from "../../assets/assetsCollection.js";
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl, 0.2, 0.2, 0.2);
const container = new AC.Sq2X2(0, 0, 25, 25);
container.palette.color[1].set(1, 1);
const comp = container.getAsset();
comp.init(gl);
const inter = setInterval(function () {
    GlUtil.clear(gl, 0.3, 0.3, 0.3);
    comp.update(gl);
    comp.draw(gl);
    if (comp.width > 100 || comp.height > 100) {
        clearInterval(inter);
    }
    else {
        comp.width += 0.5;
        comp.height += 0.5;
    }
}, 20);
