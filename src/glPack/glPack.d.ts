export default class GlPack {
    private gl;
    private program;
    constructor(canvasId?: string);
    clear(r?: number, g?: number, b?: number, w?: number): void;
    getGl(): WebGLRenderingContext;
    addVertices(vertices: number[]): void;
    createProgram(vstr: string, fstr: string): void;
    setVertexPosition(): void;
    draw(): void;
    createShader(str: string, type: number): WebGLShader;
}
//# sourceMappingURL=glPack.d.ts.map