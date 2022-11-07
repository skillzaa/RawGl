import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
import getClrObj from "../color/getClrObj.js";
import TriContComp from "../facade/triContComp.js";


export default class Multiply extends AssetBuilder {
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);
this.sizes[0] = 50; //--This is line width
 // this.palette.color[0] = getClrObj(0.3 , 0.3, 0.6); //
this.palette.color[1] = getClrObj(0,0,0); 
this.palette.color[2] = getClrObj(0,0,0);
}
/////////////////////////////////////////////
getAsset():TriContComp{
//-------------------------------------------------------|
// this.add.diagonal(
//     0+ this.sizes[0] ,100,this.sizes[0],this.palette.color[1]) ;
// this.add.diagonal(100  , 5 , this.sizes[0],this.palette.color[2]) ;
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}


// import {AssetBuilder,ClrObj} from "../assets.js";

// export default function multiply(x:number=25,y:number=25,width :number=50,height:number=50,
// clrBg :ClrObj| null=null ,
// clrMain:ClrObj| null=null,lineWidth :number=5 ):AssetBuilder{
// ////////////////////////////////////////////////
// const asset = new AssetBuilder(x,y,width,height,clrBg , clrMain);
// //////////////////////////////////////
// asset.setClrBg( asset.clrBg.r() ,asset.clrBg.g(),asset.clrBg.b());
// ////////////////===========>>>>>>>>>>>||<<<<<=====
// ///----------------------

// ///----------------------
// return asset;
// }