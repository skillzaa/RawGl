import GlUtil from "../../core/glUtil.js";
import AC from "../../assets/assetsCollection.js";
const gl = GlUtil.getGl("bilza");
const asset = new AC.Sq2X2(0);
const assetcomp = asset.getAsset();
assetcomp.update(gl);
GlUtil.clear(gl, 0.3, 0.3, 0.3);
assetcomp.draw(gl);
