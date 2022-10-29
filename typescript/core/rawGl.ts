import GlUtil from "./glUtil.js";
/**
 * RawGl Engine is for creating experimentals projects. It takes away all the boiler code and allow experimentation"
 */

export default class engine{
private readonly _gl :WebGL2RenderingContext;

constructor(canvasId :string ="bilza"){
this._gl = GlUtil.getGl(canvasId);
// this.vertices = [];
}
//------------------------init------------------
gl():WebGL2RenderingContext{
    return this._gl;
}
clear(r:number=0,g:number=0,b:number=0,a:number=1){
    GlUtil.clear(this._gl,r,g,b,a);    
}

///////////////////////////////////////////////////
}