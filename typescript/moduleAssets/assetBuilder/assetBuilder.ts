import TriContainer from "../triContainer/triContainer.js";
import ClrObj from "./clrObj.js";
import { getClrObj } from "../assets.js";
import FiveFifteenDb from "../fiveFifteen/fiveFifteenDb.js";
/**
 * The AssetBuilder takes in instructions and spits out a CoreTriContainer filled with given shapes.
 * This is the base class for inheriting AssetBuilder Objects. We can have 1 object for each asset (if that asset adds some variables etc)
*/

export default class AssetBuilder {
public showBackground :boolean;
public x :number;
public y :number;
public width :number;
public height :number;
public clrMain :ClrObj;
public clrBg :ClrObj;
//----------------
public add :FiveFifteenDb; //add is a database here
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100,clrBg :ClrObj| null=null,clrMain:ClrObj| null=null){

//black-default main
if (clrMain == null){clrMain = new ClrObj(0,0,0);}
//white-default main
if (clrBg == null){clrBg = new ClrObj(1,1,1);}
//--------------------------------------------------
this.clrMain = clrMain;
this.clrBg = clrBg;
//--------------------------------------------------
this.showBackground = true;
this.add = new FiveFifteenDb();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//----------
}

setColorBg(r:number=0,g:number=0,b:number=0){
this.clrBg = new ClrObj(r,g,b);    
}

getAsset():TriContainer{
//-------Bg
const  ctc = new TriContainer(this.x,this.y,this.width,this.height);
            if (this.showBackground == true){
            const newDb = new FiveFifteenDb();
            newDb.rectWH(0,0,100,100,this.clrBg);
            //-----------Add back gr vertices
            //@ts-expect-error
            newDb.uploadData(ctc);
            }
/////////////////////////////////
//@ts-expect-error
this.add.uploadData(ctc);
return ctc;
}
////////////////////////////////////////
setClrIfNull(clrobj :ClrObj | null,r:number,g:number,b:number):ClrObj{
if (clrobj == null){
    clrobj = new ClrObj(r,g,b);
}
return clrobj;
}
/////////////////////////
}