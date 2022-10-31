export default class VAO {
    private vertices;
    constructor();
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    addRectangle(x: number, y: number, width?: number, height?: number, r?: number, g?: number, b?: number): void;
    getVertices(): number[];
    concat(vao: VAO): void;
}
//# sourceMappingURL=vao.d.ts.map