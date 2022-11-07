import GlUtil from "./core/glUtil.js";
import AssetsCollection from "./assets/assetsCollection.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
//////////////////////////////////////

const asset = new AssetsCollection.Sq2X2( 0 , 0 , 100, 100);
asset.palette.color[1].set(0.4,0,0.3);
const comp = asset.getAsset();

GlUtil.clear(gl,0.2,0.2,0.2);
comp.init(gl);
comp.draw(gl);