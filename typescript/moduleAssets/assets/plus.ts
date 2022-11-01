import {TriContainer,AssetBuilder,ClrObj, getClrObj} from "../assets.js";

export default class Plus extends AssetBuilder {
constructor(x:number=10,y:number=40,width:number= 30,height:number=50){
super(x,y,width,height);
this.sizes[0] = 4;
this.sizes[1] = 4;
}
/////////////////////////////////////////////
getAsset():TriContainer{
const lineWdX = this.sizes[0];    
const lineWdY = this.sizes[1];    
const stPtX = (100 - lineWdX)/2;
const stPtY = (100 - lineWdY)/2;
//-------------------------------------------------------|
this.add.rectWH(stPtX,0,  lineWdX,100, this.palette.color[1]);      

this.add.rectWH(0,stPtY,  100, lineWdY, this.palette.color[1]);      
// this.add.rectWH(40,0,  20,100,  this.palette.color[1]);
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}

// export default function plus(x:number=25,y:number=25,width :number=50,height:number=50,
// clrBg :ClrObj| null=null ,
// clrMain:ClrObj| null=null, ):AssetBuilder{
// ////////////////////////////////////////////////
// const asset = new AssetBuilder(x,y,width,height,clrBg , clrMain);
// //////////////////////////////////////
// ///----------------------

// ///----------------------
// return asset;
// }