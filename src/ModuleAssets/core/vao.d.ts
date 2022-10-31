export default class VAO {
    private vertices;
    constructor();
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    addRect(x: number, y: number, width?: number, height?: number, r?: number, g?: number, b?: number): void;
    addRectVer(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, r?: number, g?: number, b?: number): void;
    addDiagonal(y1?: number, y2?: number, lineWidth?: number, r?: number, g?: number, b?: number): void;
    getVertices(): number[];
    concat(vao: VAO): void;
}
//# sourceMappingURL=vao.d.ts.map