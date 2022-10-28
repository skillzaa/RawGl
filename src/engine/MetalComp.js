import perc2glCoord from "../functions/perc2glCoord.js";
export default class CoreTriComp {
    constructor(rgba, x = 0, y = 0, width = 20, height = 10) {
        this.x = x;
        this.y = y;
        this.rotateX = 1;
        this.rotateY = 1;
        this.width = width;
        this.height = height;
        this.rgba = rgba;
        this.vertices = [];
        this.vertexPosBuffer = null;
        this.program = null;
        this.drawMode = "triangles";
    }
    addVertex(x, y, r = 0, g = 0, b = 0) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
        this.vertices.push(r);
        this.vertices.push(g);
        this.vertices.push(b);
    }
    addTri(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        this.addVertex(x1, y1, r, g, b);
        this.addVertex(x2, y2, r, g, b);
        this.addVertex(x3, y3, r, g, b);
    }
    setColor(rgba) {
        this.rgba = rgba;
    }
    init(gl) {
        this.program = this.getProgram(gl, verShaderRotate(), fragShaderFirst());
        this.vertexPosBuffer = this.getBuffer(gl);
    }
    getBuffer(gl) {
        let b = gl.createBuffer();
        if (b == null) {
            throw ("failed to create buffer");
        }
        return b;
    }
    getProgram(gl, vshader, fshader) {
        const pgm = gl.createProgram();
        if (pgm == null) {
            throw new Error("failed to create program");
        }
        gl.attachShader(pgm, vshader);
        gl.attachShader(pgm, fshader);
        return pgm;
    }
    linkNuseProgram(gl, prgrm) {
        gl.linkProgram(prgrm);
        gl.useProgram(prgrm);
    }
    createShader(gl, shaderSource, shaderType) {
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
    bindBuffer(gl, buff, buffData) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buff);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(buffData), gl.STATIC_DRAW);
    }
    draw(gl, linkedPrgrm) {
        if (this.program == null) {
            throw new Error("init error");
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        const vertexPosAttrib = gl.getAttribLocation(this.program, 'a_pos');
        const vertexColorAttrib = gl.getAttribLocation(this.program, 'a_clr');
        const u_cosLoc = gl.getUniformLocation(this.program, "u_cos");
        const u_sin = gl.getUniformLocation(this.program, "u_sin");
        var rotation = [this.rotateX, this.rotateY];
        gl.uniform1f(u_cosLoc, 1.2);
        gl.uniform1f(u_sin, 0);
        gl.enableVertexAttribArray(vertexPosAttrib);
        gl.enableVertexAttribArray(vertexColorAttrib);
        gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 5 * 4, 0);
        gl.vertexAttribPointer(vertexColorAttrib, 3, gl.FLOAT, false, 5 * 4, 2 * 4);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
}
