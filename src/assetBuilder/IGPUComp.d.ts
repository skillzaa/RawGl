export default interface IGPUComp {
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r: number, g: number, b: number): void;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=IGPUComp.d.ts.map