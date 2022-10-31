import {AssetBuilder,AssetsCollection,TriContainer,GlUtil,ClrObj,getClrObj } from "./moduleAssets/assets.js";

////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");

const asset = new AssetBuilder(25,25,50,50,getClrObj(0,0,1),getClrObj(1,0,0));
// asset.vertices.addRect(0,0,20,20,1);
asset.vertices.addDiagonal( 5,100,5,1);
const comp = asset.getAsset();
//////////////////////---draw section
GlUtil.clear(gl,0.2,0.2,0.2);

comp.init(gl);
comp.draw( gl );
