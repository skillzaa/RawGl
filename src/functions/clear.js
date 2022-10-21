export default function clear(gl, r = 0.0, g = 0.0, b = 0.8, w = 1.0) {
    gl.clearColor(r, g, b, w);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
