import GlUtil from "./core/glUtil.js";
import AssetsCollection from "./assets/assetsCollection.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
//////////////////////////////////////
const asset = new AssetsCollection.Sq2X2( 0 , 0 , 100, 100);
asset.palette.color[1].set(0.2,0.2,0.8);
asset.palette.color[2].set(0.4,0.4,0.8);
asset.palette.color[3].set(0.6,0.6,0.8);
asset.palette.color[4].set(0.8,0.3,0.8);
const comp = asset.getAsset();
comp.init(gl);
/////////////////////////////////////
GlUtil.clear(gl,0.2,0.2,0.2);
comp.draw(gl);
