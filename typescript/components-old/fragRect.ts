import Triangle from "./coreTriComp-old.js";
import rgba from "../functions/rgba.js";
import IGLEngineComp from "./IGLEngineComp.js";
import RgbaObj from "../functions/rgbaObj.js";

//----------------
export default class FragRect implements IGLEngineComp {
private tri1 :Triangle;
// private tri2 :Triangle;
constructor(rgbaObj :RgbaObj ,x :number,y :number, width :number, height :number){
this.tri1 = new Triangle(rgbaObj);
this.tri1.addVertex(x,y);
this.tri1.addVertex(x + width,y);
this.tri1.addVertex(x,y + height);

this.tri1.addVertex(x + width,y + height);
this.tri1.addVertex(x, y + height);
this.tri1.addVertex(x + width,y);

// this.tri2 = new Triangle(rgbaObj);


}
init(gl :WebGLRenderingContext, fragStr :string){
    this.tri1.init(gl,fragStr);
}
draw(gl: WebGLRenderingContext): void {
    this.tri1.draw(gl);
    // this.tri2.draw(gl);
}

}