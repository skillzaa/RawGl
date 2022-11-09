import { ContainerComp, GlUtil } from "../src/rawGl.js";
const gl = GlUtil.getGl("bilza");
function grid() {
    const comp = new ContainerComp(10, 10, 80, 80);
    let y = 0;
    for (let outer = 0; outer < 10; outer++) {
        for (let inner = 0; inner < 10; inner++) {
            comp.add.rectWH(inner * 10, y, 10, 10, Math.random(), Math.random(), Math.random());
        }
        y += 10;
    }
    GlUtil.clear(gl, 0.3, 0.2, 0.2);
    comp.init(gl);
    comp.draw(gl);
}
setInterval(function () {
    grid();
}, 1000);
