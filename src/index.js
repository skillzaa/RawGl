import { AssetsCollection, GlUtil, getClrObj } from "./moduleAssets/assets.js";
const gl = GlUtil.getGl("bilza");
const asset = AssetsCollection.multiply(0, 0, 100, 100, getClrObj(0, 0, 1), getClrObj(1, 1, 0));
const comp = asset.getAsset();
GlUtil.clear(gl, 0.2, 0.2, 0.2);
comp.init(gl);
comp.draw(gl);
