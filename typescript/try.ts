import getClrObj from "./color/getClrObj.js";
import GlUtil from "./core/glUtil.js";
import { TriContComp } from "./index.js";
import AssetBuilder from "./assetBuilder/assetBuilder.js";
////////////////////////////////////////////////

const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);

/////////////////////////////////////////////
const asset = new AssetBuilder(25,25,50,50);
asset.add.rectWH(20,20,40,40,getClrObj(1));
asset.add.polygon( 40,40, 10,10,120  , getClrObj(1,1) );
const comp = asset.getAsset();
// const comp = new TriContComp(25,25,50,50);

comp.init(gl);
// comp.add.rectWH(20,20,40,40,getClrObj(1));
////////////////////////////////////////
// const inter = setInterval(function(){    
GlUtil.clear(gl,0.9,0.9,0.9);
comp.update(gl);
comp.draw(gl);

////////////////////////////////////////