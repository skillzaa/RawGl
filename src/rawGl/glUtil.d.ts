export default class GlUtil {
    static getGl(canvasId?: string): WebGLRenderingContext;
    static getProgram(gl: WebGLRenderingContext, vshader: WebGLShader, fshader: WebGLShader): WebGLProgram;
    static getBuffer(gl: WebGLRenderingContext): WebGLBuffer;
    static createShader(gl: WebGLRenderingContext, shaderSource: string, shaderType: number): WebGLShader;
    static bindBuffer(gl: WebGLRenderingContext, buff: WebGLBuffer, buffData: number[]): void;
    static linkNuseProgram(gl: WebGLRenderingContext, prgrm: WebGLProgram): void;
    static clear(gl: WebGLRenderingContext, r?: number, g?: number, b?: number, a?: number): void;
    static setAttribute(gl: WebGLRenderingContext, nameStr: string, programe: WebGLProgram, numberOfComps: number, stride: number, offset?: number): void;
    static stdVertexShaderSrc(): string;
    static stdFragShaderSrc(): string;
}
//# sourceMappingURL=glUtil.d.ts.map