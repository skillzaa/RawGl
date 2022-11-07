import getClrObj from "./color/getClrObj.js";
import GlUtil from "./core/glUtil.js";
import { TriContComp } from "./index.js";
import AssetBuilder from "./assetBuilder/assetBuilder.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);
GlUtil.setCanvasToScreen(gl);
/////////////////////////////////////////////
const asset = new AssetBuilder(25,25,50,50);
asset.add.rectWH(20,20,40,40,getClrObj(1));
asset.add.polygon( 40,40, 10,10,120  , getClrObj(1,1) );
const comp = asset.getAsset();

////////////////////////////////////////
comp.init(gl);
////////////////////////////////////////
GlUtil.clear(gl,0.9,0.9,0.9);
comp.update(gl);
comp.draw(gl);