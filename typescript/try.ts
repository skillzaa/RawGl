import {GlUtil,AssetBuilder} from "./rawGl.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
GlUtil.clear(gl,0.2,0.2,0.2);
/////////////////////////////////////////////
const asset = new AssetBuilder(25,25,50,50);
asset.add.rectWH(20,20,40,40,                   1);
asset.add.polygon( 40,40, 10,10,120,              1,1 );
////////////////////////////////////////
const comp = asset.getAsset();

comp.init(gl);
////////////////////////////////////////
GlUtil.clear(gl,0.9,0.9,0.9);
comp.update(gl);
comp.draw(gl);
