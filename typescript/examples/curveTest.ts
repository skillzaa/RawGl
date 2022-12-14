import CorePoint from "../core/corePoint.js";
import { ContainerComp, GlUtil } from "../rawGl.js";
import getLinePoints from "../core/pointFns/getLinePoints.js";
import getFullLine from "../core/pointFns/getfullLine.js";
import {AssetsCollection} from "../rawGl.js";


///////////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");

const comp = new ContainerComp(25,25,50,50);
comp.add.rectWH(0,0,100,100,    0,0,1);
comp.add.curveQuad(10,10,   50,100,           97,10,      
       2,4.5,      1,0,0,   0.2);

GlUtil.clear(gl,0.2,0.2,0.2);

comp.update(gl);
comp.draw(gl);
console.log("comp", comp);

