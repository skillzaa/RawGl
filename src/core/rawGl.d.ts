export default class engine {
    private readonly _gl;
    vao: WebGLBuffer | null;
    constructor(canvasId?: string);
    createProgram(vertices: number[], vertexShaderSrc: string, fragShaderSrc: string): WebGLProgram;
    gl(): WebGL2RenderingContext;
    getProgram(vshader: WebGLShader, fshader: WebGLShader): WebGLProgram;
    createShader(shaderSource: string, shaderType: number): WebGLShader;
    linkNuseProgram(prgrm: WebGLProgram): void;
    clear(r?: number, g?: number, b?: number, a?: number): void;
    setAttribute(nameStr: string, programe: WebGLProgram, numberOfComps: number, stride: number, offset?: number): void;
    stdVertexShaderSrc(): string;
    stdFragShaderSrc(): string;
    getUniformLocation(programe: WebGLProgram, uniformName: string): WebGLUniformLocation;
    getBuffer(): WebGLBuffer;
    bindBuffer(buff: WebGLBuffer, buffData: number[]): void;
}
//# sourceMappingURL=rawGl.d.ts.map