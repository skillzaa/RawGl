import {TriCont}  from "../rawGl.js";

import ClrObj from "../color/clrObj.js";
import upload515ToTriCont from "../formats/upload515ToTriCont.js";
import Add from "./add.js";
import IAssetBuilder from "./IAssetBuilder.js";
/**  
The AssetBuilder takes in instructions and spits out a TriCont Comp filled with given shapes.
*/

export default class AssetBuilder implements IAssetBuilder{
public showBackground :boolean;
public colorBackground :ClrObj;

public x :number;
public y :number;
public width :number;
public height :number;
//----------------
public add :Add; //add is a database here
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100){

this.showBackground = false;
this.colorBackground = new ClrObj(1,1,1);
this.add = new Add();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//----------
}

getAsset():TriCont{
//-------Bg
const  ctc = new TriCont(this.x,this.y,this.width,this.height);
            if (this.showBackground == true){
             ctc.add.rectWH(0,0,100,100,    
                this.colorBackground.r(),
                this.colorBackground.g(),
                this.colorBackground.b());   
            }
/////////////////////////////////
const remainingTriangle = this.add.getDb()
upload515ToTriCont( remainingTriangle ,ctc);
return ctc;
}
////////////////////////////////////////
}