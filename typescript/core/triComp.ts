import BaseTriComp from "./baseTriComp.js";
import perc2glCoord from "./functions/perc2glCoord.js";
/**
 * TriComp extends BaseTriComp just to convert the webgl coords into percentages
 */ 
export default class TriComp extends BaseTriComp{
constructor(){
    super();
}

public addTri(x1 :number,y1:number,x2:number,y2:number,x3:number,y3:number,r:number=1,g:number=0,b:number=0){
x1 = perc2glCoord(x1);
y1 = perc2glCoord(y1);
x2 = perc2glCoord(x2);
y2 = perc2glCoord(y2);
x3 = perc2glCoord(x3);
y3 = perc2glCoord(y3);
super.addTri(x1,y1,x2,y2,x3,y3,r,g,b);
}

}