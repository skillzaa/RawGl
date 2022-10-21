

export default function clear(gl :WebGLRenderingContext,
    r :number = 0.0,
    g :number = 0.0,
    b :number = 0.8,
    w :number = 1.0
    ){
gl.clearColor(r, g, b, w);
gl.clear(gl.COLOR_BUFFER_BIT);
}