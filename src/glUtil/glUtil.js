export default class GlUtil {
    static getGl(canvasId = "bilza") {
        const canvas = document.getElementById(canvasId);
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        const gl = canvas.getContext("webgl");
        if (gl == null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }
        return gl;
    }
    static getProgram(gl, vshader, fshader) {
        const pgm = gl.createProgram();
        if (pgm == null) {
            throw new Error("failed to create program");
        }
        gl.attachShader(pgm, vshader);
        gl.attachShader(pgm, fshader);
        return pgm;
    }
    static getBuffer(gl) {
        let b = gl.createBuffer();
        if (b == null) {
            throw ("failed to create buffer");
        }
        return b;
    }
    static createShader(gl, shaderSource, shaderType) {
        var shader = gl.createShader(shaderType);
        if (shader == null) {
            throw new Error("shaders could not be created");
        }
        gl.shaderSource(shader, shaderSource);
        gl.compileShader(shader);
        let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            var errors = gl.getShaderInfoLog(shader);
            console.log('Failed to compile with these errors:' + "type:" + shaderType, errors);
        }
        return shader;
    }
    static bindBuffer(gl, buff, buffData) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buff);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(buffData), gl.STATIC_DRAW);
    }
    static linkNuseProgram(gl, prgrm) {
        gl.linkProgram(prgrm);
        gl.useProgram(prgrm);
    }
    static clear(gl, r = 0, g = 0, b = 0, a = 1) {
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    static setAttribute(gl, nameStr, programe, numberOfComps, stride, offset = 0) {
        const vertexPosAttrib = gl.getAttribLocation(programe, `${nameStr}`);
        gl.enableVertexAttribArray(vertexPosAttrib);
        gl.vertexAttribPointer(vertexPosAttrib, numberOfComps, gl.FLOAT, false, stride, offset);
    }
}
