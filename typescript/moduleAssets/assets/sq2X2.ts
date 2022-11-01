import {TriContainer,AssetBuilder,ClrObj, getClrObj} from "../assets.js";

export default class Sq2x2 extends AssetBuilder {
public clrSq2 :ClrObj;
constructor(x:number=0,y:number=0,width:number=100,height:number=100,clrBg :ClrObj| null=null,clrMain:ClrObj| null=null){
super(x,y,width,height,clrBg,clrMain);
this.clrSq2 = getClrObj(0,0,0);
}
/////////////////////////////////////////////
getAsset():TriContainer{
//--------------------------
this.add.rectWH(0,0,50,100,this.clrMain);
this.add.rectWH(50,0,50,100,this.clrSq2);
//-------------------------------------
return super.getAsset();    
}



/////////////////////////////////////////////
}
// asset.vertices.addRect(50,50,50,50,  asset.clrMain.r(),asset.clrMain.g(),asset.clrMain.b());


// asset.vertices.addRect(0,50, 50,50, 
// asset.palette[0].r(),asset.palette[0].g(), asset.palette[0].b());

// asset.vertices.addRect(0,0,50,50,
// asset.palette[1].r(), asset.palette[1].g(), asset.palette[1].b());

// asset.vertices.addRect(50,0,50,50,   asset.palette[2].r(),asset.palette[2].g(),asset.palette[2].b());
// ///----------------------
// return asset;
// }


