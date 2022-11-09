export default function upload515ToTriCont(triangles, ctc) {
    for (let i = 0; i < triangles.length; i++) {
        const t = triangles[i];
        ctc.addTri(t.x1(), t.y1(), t.x2(), t.y2(), t.x3(), t.y3(), t.r(), t.g(), t.b());
    }
    return ctc;
}
