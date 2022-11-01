import {AssetBuilder,AssetsCollection as ACol,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";


////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
const asset = new ACol.multiply(25,25,50,50);
//////////////////////////////////////////////////
//-----------change properties
asset.sizes[0] = 80;
asset.sizes[1] = 70;
// asset.sizes[2] = 60;
// asset.palette.color[0] = getClrObj(0.6 , 0.6, 0.9); //
asset.palette.color[1] = getClrObj(1); 
asset.palette.color[2] = getClrObj(0,1);
//////////////////////////////////////////////////
//---Extract the asset
const assetcomp = asset.getAsset();
//////////////////////////////////////////////////
//--- init and draw
assetcomp.init(gl);
//---Update so that the changes take effect
assetcomp.update(gl);
//////////////////////////////////////////////////
//--- draw
GlUtil.clear(gl,0.1,0.1,0.6);
assetcomp.draw(gl);
