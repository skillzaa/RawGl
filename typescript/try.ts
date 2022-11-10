import CorePoint from "./core/corePoint.js";
import { GlUtil } from "./rawGl.js";
import getLinePoints from "./core/pointFns/getLinePoints.js";

const gl = GlUtil.getGl("bilza");



const cp = new CorePoint( getLinePoints() );
// cp.addPoint(25,50,25,1);
// cp.addPoint(50,50,50,0,1);
// cp.addPoint(75,50,75,0,0,1);



GlUtil.clear(gl,0.2,0.2,0.2);
cp.update(gl);
cp.draw(gl);

console.log("cp",cp);