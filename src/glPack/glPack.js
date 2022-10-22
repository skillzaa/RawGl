export default class GlPack {
    constructor(canvasId = "bilza") {
        const canvas = document.getElementById(canvasId);
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        const gl = canvas.getContext("webgl");
        if (gl == null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }
        this.gl = gl;
        this.program = null;
    }
    clear(r = 0.0, g = 0.0, b = 0.8, w = 1.0) {
        this.gl.clearColor(r, g, b, w);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    getGl() {
        return this.gl;
    }
    addVertices(vertices) {
        let vertexPosBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexPosBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
    }
    createProgram(vstr, fstr) {
        this.program = this.gl.createProgram();
        var vshader = this.createShader(vstr, this.gl.VERTEX_SHADER);
        var fshader = this.createShader(fstr, this.gl.FRAGMENT_SHADER);
        if (this.program == null) {
            throw new Error("program could not be created");
        }
        this.gl.attachShader(this.program, vshader);
        this.gl.attachShader(this.program, fshader);
        this.gl.linkProgram(this.program);
        this.gl.useProgram(this.program);
    }
    setVertexPosition() {
        if (this.program == null) {
            throw new Error("program not set");
        }
        this.program.vertexPosAttrib = this.gl.getAttribLocation(this.program, 'pos');
        this.gl.enableVertexAttribArray(this.program.vertexPosAttrib);
        this.gl.vertexAttribPointer(this.program.vertexPosAttrib, 2, this.gl.FLOAT, false, 0, 0);
    }
    draw() {
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
    createShader(str, type) {
        var shader = this.gl.createShader(type);
        if (shader == null) {
            throw new Error("shaders could not be created");
        }
        this.gl.shaderSource(shader, str);
        this.gl.compileShader(shader);
        return shader;
    }
}
