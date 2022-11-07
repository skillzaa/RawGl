export default class GlUtil {
    static getGl(canvasId?: string): WebGL2RenderingContext;
    static getProgram(gl: WebGL2RenderingContext, vshader: WebGLShader, fshader: WebGLShader): WebGLProgram;
    static getBuffer(gl: WebGL2RenderingContext): WebGLBuffer;
    static createShader(gl: WebGL2RenderingContext, shaderSource: string, shaderType: number): WebGLShader;
    static bindBuffer(gl: WebGL2RenderingContext, buff: WebGLBuffer, buffData: number[]): void;
    static linkNuseProgram(gl: WebGL2RenderingContext, prgrm: WebGLProgram): void;
    static clear(gl: WebGL2RenderingContext, r?: number, g?: number, b?: number, a?: number): void;
    static setAttribute(gl: WebGL2RenderingContext, nameStr: string, programe: WebGLProgram, numberOfComps: number, stride: number, offset?: number): void;
    static getUniformLocation(gl: WebGL2RenderingContext, programe: WebGLProgram, uniformName: string): WebGLUniformLocation;
    static setCanvasToScreen(gl: WebGL2RenderingContext): boolean;
}
//# sourceMappingURL=glUtil.d.ts.map