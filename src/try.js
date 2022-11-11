import CorePoint from "./core/corePoint.js";
import { GlUtil } from "./rawGl.js";
import getFullLine from "./core/pointFns/getfullLine.js";
import { AssetsCollection } from "./rawGl.js";
const gl = GlUtil.getGl("bilza");
const grid = new AssetsCollection.Grid().getAsset();
let cpy = 0;
function draw() {
    const cp = new CorePoint(getFullLine(cpy));
    const cpMarker = new CorePoint();
    cpMarker.addPoint(50, cpy, 30, 0, 1);
    GlUtil.clear(gl, 0.2, 0.2, 0.2);
    grid.update(gl);
    grid.draw(gl);
    cp.update(gl);
    cp.draw(gl);
    cpMarker.update(gl);
    cpMarker.draw(gl);
}
setInterval(function () {
    draw();
    cpy += 0.5;
}, 100);
