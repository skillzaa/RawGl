import {AssetBuilder,AssetsCollection as ACol,TriContainer,GlUtil,ClrObj,getClrObj } from "../assets.js";
import Sq2x2 from "../../assets/sq2X2.js";
////////////////////////////////////////////////
const gl = GlUtil.getGl("bilza");


const asset = new ACol.sq2X2(0);
//////////////////////////////////////////////////
//-----------change properties
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
GlUtil.clear(gl,0.3,0.3,0.3);
assetcomp.draw(gl);
