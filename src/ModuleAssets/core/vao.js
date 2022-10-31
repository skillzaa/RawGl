export default class VAO {
    constructor() {
        this.vertices = [];
    }
    addTriangle(x1, y1, x2, y2, x3, y3, r = 1, g = 0, b = 0) {
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
    addRectangle(x, y, width = 30, height = 20, r = 1, g = 0, b = 0) {
        this.addTriangle(x, y, x + width, y, x + width, y + height, r, g, b);
        this.addTriangle(x + width, y + height, x, y + height, x, y, r, g, b);
    }
    getVertices() {
        return this.vertices;
    }
    concat(vao) {
        this.vertices = this.vertices.concat(vao.getVertices());
    }
}