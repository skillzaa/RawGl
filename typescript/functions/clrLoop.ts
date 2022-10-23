
import RgbaObj from "./rgbaObj.js";
import rgba from "./rgba.js";



export default class ClrLoop {

private loop :RgbaObj[];    
private counter :number;
constructor(){
this.counter = 0;
this.loop = [];
// this.loop.push(rgba(1,0,0,1));
}
clear(){
    this.loop.length = 0;
}
addRgba(r :number=0, g :number=0,b :number=0,a :number=1){
this.loop.push(rgba(r,g,b,a));
}
nextRgba():RgbaObj{
if (this.loop.length == 0 ){throw new Error("no color added in the color loop");}    
if (this.counter >= this.loop.length){this.counter=0;}
const r = this.loop[this.counter];
this.counter += 1;
return r;
}
}