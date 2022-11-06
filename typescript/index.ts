import {AssetBuilder,AssetsCollection as ACol,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";
import Grid from "./moduleAssets/assets/grid.js";
import firve15To26 from "./functions/firve15To26.js";

////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
const asset = new Grid(0,0,100,100);
//////////////////////////////////////////////////
//-----------change properties
//////////////////////////////////////////////////
//---Extract the asset
 
const assetcomp = asset.getAsset();

//--get 
const five15 = asset.add.getDb()
const two6 = firve15To26(five15);
console.log("two6",two6);


//////////////////////////////////////////////////
//--- init and draw
assetcomp.init(gl);
//---Update so that the changes take effect
assetcomp.update(gl);
//////////////////////////////////////////////////
//--- draw
GlUtil.clear(gl,0.3,0.3,0.3);
assetcomp.draw(gl);

console.log("assetcomp",assetcomp);