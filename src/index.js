import { AssetsCollection, GlUtil, getClrObj } from "./moduleAssets/assets.js";
const gl = GlUtil.getGl("bilza");
const assetOther = AssetsCollection.sq2X2(0, 0, 100, 100, null, getClrObj(1), getClrObj(0, 1), getClrObj(0, 0, 1), getClrObj(0.8, 0.8, 1));
const compOther = assetOther.getAsset();
GlUtil.clear(gl, 0.2, 0.2, 0.2);
compOther.init(gl);
compOther.draw(gl);
