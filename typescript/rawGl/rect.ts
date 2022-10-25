import RawComp from "./rawComp.js";
import rgba from "../functions/rgba.js";
import RgbaObj from "../functions/rgbaObj.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";

//----------------
export default class Rectangle {
private rawComp :RawComp;

constructor(rgbaObj :RgbaObj = rgba(1,1,1,1) ,x :number=50,y :number=50, width :number=40, height :number=20){

this.rawComp = new RawComp(rgbaObj);
this.rawComp.addVertex(x,y);
this.rawComp.addVertex(x + width,y);
this.rawComp.addVertex(x,y + height);

////--triangle - 2    
    
this.rawComp.addVertex(x + width,y + height );
this.rawComp.addVertex( x, y + height );
this.rawComp.addVertex( x + width,y );
    
}

init(gl :WebGLRenderingContext){
    this.rawComp.init(gl,fragShaderFirst(0,0,1));
}

draw(gl: WebGLRenderingContext): void {
    this.rawComp.draw(gl);
}

}