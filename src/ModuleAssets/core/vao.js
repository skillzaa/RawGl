export default class VAO {
    constructor() {
        this.vertices = [];
    }
    addTri(x1, y1, x2, y2, x3, y3, r = 1, g = 0, b = 0) {
        this.vertices.push((x1));
        this.vertices.push((y1));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
        this.vertices.push((x2));
        this.vertices.push((y2));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
        this.vertices.push((x3));
        this.vertices.push((y3));
        this.vertices.push((r));
        this.vertices.push((g));
        this.vertices.push((b));
    }
    addRect(x, y, width = 30, height = 20, r = 1, g = 0, b = 0) {
        this.addTri(x, y, x + width, y, x + width, y + height, r, g, b);
        this.addTri(x + width, y + height, x, y + height, x, y, r, g, b);
    }
    addRectVer(x1, y1, x2, y2, x3, y3, x4, y4, r = 1, g = 0, b = 0) {
        this.addTri(x1, y1, x2, y2, x3, y3, r, g, b);
        this.addTri(x3, y3, x2, y2, x1, y1, r, g, b);
    }
    addDiagonal(y1 = 0, y2 = 100, lineWidth = 4, r = 1, g = 0, b = 0) {
        this.addTri(0, y1 - lineWidth, 0, y1, 100, y2, r, g, b);
        this.addTri(100, y2, 100, y2 - lineWidth, 0, y1 - lineWidth, r, g, b);
    }
    getVertices() {
        return this.vertices;
    }
    concat(vao) {
        this.vertices = this.vertices.concat(vao.getVertices());
    }
}
