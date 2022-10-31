import {AssetBuilder,ClrObj} from "../assets.js";

export default function sq2X2(x:number,y:number,width :number,height:number,
clrBg :ClrObj| null=null ,
clrMain:ClrObj| null=null):AssetBuilder{
////////////////////////////////////////////////
const asset = new AssetBuilder(x,y,width,height,clrBg , clrMain);

//////////////////////////////////////
// asset.setClrBg( asset.clrBg.r() ,asset.clrBg.g(),asset.clrBg.b());
//////////////////////////////////////
asset.vertices.addRect(50,50,50,50,  asset.clrMain.r(),asset.clrMain.g(),asset.clrMain.b());


asset.vertices.addRect(0,50, 50,50, 
asset.palette[0].r(),asset.palette[0].g(), asset.palette[0].b());

asset.vertices.addRect(0,0,50,50,
asset.palette[1].r(), asset.palette[1].g(), asset.palette[1].b());

asset.vertices.addRect(50,0,50,50,   asset.palette[2].r(),asset.palette[2].g(),asset.palette[2].b());
///----------------------
return asset;
}