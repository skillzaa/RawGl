import {AssetBuilder,ClrObj} from "../assets.js";

export default function plus(x:number=25,y:number=25,width :number=50,height:number=50,
clrBg :ClrObj| null=null ,
clrMain:ClrObj| null=null, ):AssetBuilder{
////////////////////////////////////////////////
const asset = new AssetBuilder(x,y,width,height,clrBg , clrMain);
//////////////////////////////////////
asset.setClrBg( asset.clrBg.r() ,asset.clrBg.g(),asset.clrBg.b());
//////////////////////////////////////
///----------------------
asset.vertices.addRectangle(0,40,  100,20,   asset.clrMain.r(),asset.clrMain.g(),asset.clrMain.b());
asset.vertices.addRectangle(40,0,  20,100,   asset.clrMain.r(),asset.clrMain.g(),asset.clrMain.b());
///----------------------
return asset;
}