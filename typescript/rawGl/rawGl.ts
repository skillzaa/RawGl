import rgba from "../functions/rgba.js";
import RgbaObj from "../functions/rgbaObj.js";



export default class RawGl {
private gl :WebGLRenderingContext;
public colorBackground :RgbaObj;

constructor(canvasId :string ="bilza",color :RgbaObj = rgba(0,0,1)){
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (canvas == null){
        throw new Error("canvas not found");
    }

    const gl = canvas.getContext("webgl");
    if (gl == null) {
        throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
//---Got gl    
this.gl = gl;
this.colorBackground = color;
}
public clear(){
this.gl.clearColor(this.colorBackground.r, this.colorBackground.g, this.colorBackground.b, this.colorBackground.a);
this.gl.clear(this.gl.COLOR_BUFFER_BIT);
}

getGl():WebGLRenderingContext{
    return this.gl;
}
setBackgroundColor(rgba :RgbaObj){
this.colorBackground = rgba;
}


}