import { GlUtil } from "./rawGl.js";
import { AssetsCollection } from "./rawGl.js";
const gl = GlUtil.getGl("bilza");
const asset = new AssetsCollection.Leaf();
const comp = asset.getAsset();
GlUtil.clear(gl, 0.2, 0.2, 0.2);
comp.update(gl);
comp.draw(gl);
console.log("comp", comp);
