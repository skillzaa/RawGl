import {TriContainer,AssetBuilder,ClrObj, getClrObj} from "../assets.js";

export default class  RectTest extends AssetBuilder {
constructor(x:number=0,y:number=0,width:number=100,height:number=100){
super(x,y,width,height);
}
/////////////////////////////////////////////
getAsset():TriContainer{
//-------------------------------------------------------|
this.add.rect(0,0,  50,0, 50,50, this.palette.color[1]);      
// this.add.rectWH(0,50,100,100,this.palette.color[2]);
//-------------------------------------------------------
return super.getAsset();    
}
/////////////////////////////////////////////
}
