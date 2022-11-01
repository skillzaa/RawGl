import { AssetsCollection as ACol, GlUtil } from "../assets.js";
const gl = GlUtil.getGl("bilza");
const asset = new ACol.sq2X2(0);
const assetcomp = asset.getAsset();
assetcomp.init(gl);
assetcomp.update(gl);
GlUtil.clear(gl, 0.3, 0.3, 0.3);
assetcomp.draw(gl);
