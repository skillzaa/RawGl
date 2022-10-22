// export default function drawArc(target, 
//     x, 
//     y, 
//     radius, 
//     arc, 
//     startAngle = 0, 
//     yRadius = 0) {

// if (yRadius === 0)
// yRadius = radius;
// let segs = Math.ceil(Math.abs(arc) / 45);
// let segAngle = arc / segs;
// let theta = -(segAngle / 180) * Math.PI;
// let angle = -(startAngle / 180) * Math.PI;
// let ax = x - Math.cos(angle) * radius;
// let ay = y - Math.sin(angle) * yRadius;
// let angleMid, bx, by, cx, cy;

// if (segs > 0) {
// target.moveTo(x, y);
// for (let i = 0; i < segs; ++i) {
// angle += theta;
// angleMid = angle - (theta / 2);
// bx = ax + Math.cos(angle) * radius;
// by = ay + Math.sin(angle) * yRadius;
// cx = ax + Math.cos(angleMid) * (radius / Math.cos(theta / 2));
// cy = ay + Math.sin(angleMid) * (yRadius / Math.cos(theta / 2));
// target.quadraticCurveTo(cx, cy, bx, by);
// }
// }
// }