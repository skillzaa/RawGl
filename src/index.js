import { AssetBuilder, GlUtil } from "./moduleAssets/assets.js";
const gl = GlUtil.getGl("bilza");
const assetBld = new AssetBuilder();
assetBld.add.addTri(0, 0, 100, 100, 60, 60, assetBld.clrMain);
const comp = assetBld.getAsset();
comp.init(gl);
GlUtil.clear(gl, 0, 0, 0.3);
comp.draw(gl);
