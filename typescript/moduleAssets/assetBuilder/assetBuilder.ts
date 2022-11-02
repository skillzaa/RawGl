import TriContainer from "../../core/triContComp.js";
import ClrObj from "./clrObj.js";
import { getClrObj } from "../assets.js";
import FiveFifteenDb from "../../primtives/fiveFifteenDb-canab.js";
import Palette from "./palette.js";
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
public palette :Palette;
public sizes :number[];
public switches :boolean[];
//----------------
public add :FiveFifteenDb; //add is a database here
//////////////////////////////////////////////////
constructor(x:number=0,y:number=0,width:number=100,height:number=100){

this.palette = new Palette();
this.sizes = [];
this.switches = [];
this.showBackground = true;
this.add = new FiveFifteenDb();
//--------------------------------------------------
this.x = x;
this.y = y;
this.width = width;
this.height = height;
//----------
}

getAsset():TriContainer{
//-------Bg
const  ctc = new TriContainer(this.x,this.y,this.width,this.height);
            if (this.showBackground == true){
            const newDb = new FiveFifteenDb();
            //--This is where we use index 0 for background
            newDb.rectWH(0,0,100,100,this.palette.color[0]);
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