import CorePoint from "./core/corePoint.js";
import { ContainerComp, GlUtil } from "./rawGl.js";
import getLinePoints from "./core/pointFns/getLinePoints.js";
import getFullLine from "./core/pointFns/getfullLine.js";
import {AssetsCollection} from "./rawGl.js";


///////////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");

const asset = new AssetsCollection.Leaf();
const comp = asset.getAsset();

GlUtil.clear(gl,0.2,0.2,0.2);

comp.update(gl);
comp.draw(gl);
console.log("comp", comp);

