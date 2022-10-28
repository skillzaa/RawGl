export default class engine {
    private gl;
    constructor(canvasId?: string);
    getGl(): WebGLRenderingContext;
    getProgram(vshader: WebGLShader, fshader: WebGLShader): WebGLProgram;
    getBuffer(): WebGLBuffer;
    createShader(shaderSource: string, shaderType: number): WebGLShader;
    bindBuffer(buff: WebGLBuffer, buffData: number[]): void;
    linkNuseProgram(prgrm: WebGLProgram): void;
    clear(r?: number, g?: number, b?: number, a?: number): void;
    setAttribute(nameStr: string, programe: WebGLProgram, numberOfComps: number, stride: number, offset?: number): void;
    stdVertexShaderSrc(): string;
    stdFragShaderSrc(): string;
}
//# sourceMappingURL=engine.d.ts.map