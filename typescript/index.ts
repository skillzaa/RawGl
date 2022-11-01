import {AssetBuilder,AssetsCollection as ACol,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";


////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");
const asset = new ACol.plus(25,25,50,50);
//////////////////////////////////////////////////
//-----------change properties
asset.sizes[0] = 5;
asset.sizes[1] = 10;
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
