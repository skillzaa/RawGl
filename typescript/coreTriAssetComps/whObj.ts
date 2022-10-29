


export default class WhObj {
public readonly x:number;
public readonly y:number;
public readonly width:number;
public readonly height:number;
/////////////////////////////////////////////////
constructor(x:number,y:number,width:number,height:number){
this.x = x;
this.y = y;
this.width = width;
this.height = height;
}

rightEdge():number{
return this.x + this.width;
}
topEdge():number{
return this.y + this.height;
}

xPerc(perc :number):number{
const a = (this.width/100) * perc;
return this.x + a;
}
yPerc(perc :number):number{
const a = (this.height/100) * perc;
return this.x + a;
}


}