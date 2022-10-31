import {AssetBuilder,ClrObj} from "../assets.js";

export default function multiply(x:number=25,y:number=25,width :number=50,height:number=50,
clrBg :ClrObj| null=null ,
clrMain:ClrObj| null=null,lineWidth :number=5 ):AssetBuilder{
////////////////////////////////////////////////
const asset = new AssetBuilder(x,y,width,height,clrBg , clrMain);
//////////////////////////////////////
asset.setClrBg( asset.clrBg.r() ,asset.clrBg.g(),asset.clrBg.b());
////////////////===========>>>>>>>>>>>||<<<<<=====
///----------------------
    asset.vertices.addDiagonal (5  , 100 , 5,      
asset.clrMain.r() ,asset.clrMain.g(),asset.clrMain.b()    );

    asset.vertices.addDiagonal (100 , 5  , 5,      
asset.clrMain.r() ,asset.clrMain.g(),asset.clrMain.b()    );

///----------------------
return asset;
}