import {AssetBuilder,AssetsCollection,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";

////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");


// const multiply = AssetsCollection.multiply(0,80,20,20,getClrObj(0,0,1),getClrObj(1,1,0));
// const multiplycomp = multiply.getAsset();
// multiplycomp.init(gl);
// multiplycomp.draw(gl);
// //////////////////////---draw section
// const plus = AssetsCollection.plus(20,80,20,20,getClrObj(0,0,1),getClrObj(1,1,0));
// const pluscomp = plus.getAsset();
// pluscomp.init(gl);
// pluscomp.draw(gl);
// //////////////////////---draw section
// //////////////////////---draw section
// const sq2X2 = AssetsCollection.sq2X2 (40,80,20,20,getClrObj(0,0,1),getClrObj(1,1,0));
// sq2X2.palette[1] = getClrObj(0,0,0);
// const sq2X2comp = sq2X2.getAsset();
//       sq2X2comp.init(gl);
//       sq2X2comp.draw(gl);
//////////////////////---draw section

const assetBld = new AssetBuilder();
assetBld.add.addTri(0,0,100,100,60,60,assetBld.clrMain);

const comp = assetBld.getAsset(); 
comp.init(gl);
GlUtil.clear(gl,0,0,0.3);
comp.draw(gl);

