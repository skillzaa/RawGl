import ClrObj from "./clrObj.js";
import getClrObj from "./getClrObj.js";

//-----------------------------------------
export default class Palette{
public color : ClrObj[];
constructor(){
this.color = [];
//--zero is for background
this.color[0] = getClrObj(1.0,1.0,1.0); // white
this.color[1] = getClrObj(0.0,0.0,0.0);//  black
this.color[2] = getClrObj(1.0,0.0,0.0); // red
this.color[3] = getClrObj(0.0,1.0,0.0); // green
this.color[4] = getClrObj(0.0,0.0,1.0); // blue
this.color[5] = getClrObj(1.0,1.0,0.0); // yellow
this.color[6] = getClrObj(Math.random(),Math.random(),Math.random()); // random
this.color[7] = getClrObj(Math.random(),Math.random(),Math.random()); // random
this.color[8] = getClrObj(Math.random(),Math.random(),Math.random()); // random
this.color[9] = getClrObj(Math.random(),Math.random(),Math.random()); // random


}



}