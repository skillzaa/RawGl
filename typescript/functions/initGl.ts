

export default function initGl (canvasId :string ="bilza"):WebGLRenderingContext{
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    if (canvas == null){
        throw new Error("canvas not found");
    }

    const gl = canvas.getContext("webgl");
    if (gl == null) {
        throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
    return gl;    
}