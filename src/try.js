import CorePoint from "./core/corePoint.js";
import { GlUtil } from "./rawGl.js";
import getLinePoints from "./core/pointFns/getLinePoints.js";
const gl = GlUtil.getGl("bilza");
const cp = new CorePoint(getLinePoints());
GlUtil.clear(gl, 0.2, 0.2, 0.2);
cp.update(gl);
cp.draw(gl);
console.log("cp", cp);
