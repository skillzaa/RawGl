import {AssetBuilder,AssetsCollection,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";
import Sq2x2 from "./moduleAssets/assets/sq2X2.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");


const asset = new Sq2x2();

asset.clrMain = getClrObj(0,0,0.4);
asset.clrSq2 =  getClrObj(0.4,0);


const assetcomp = asset.getAsset();
assetcomp.init(gl);
GlUtil.clear(gl,0.3,0.3,0.3);
assetcomp.update(gl);
assetcomp.draw(gl);
