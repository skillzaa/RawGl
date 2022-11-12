import { ContainerComp, GlUtil } from "./rawGl.js";
const gl = GlUtil.getGl("bilza");
const comp = new ContainerComp(25, 25, 50, 50);
comp.add.rectWH(0, 0, 100, 100, 0, 0, 1);
comp.add.curveQuad(0, 0, 50, 100, 100, 0, 1, 2, 1, 0, 0, 1);
GlUtil.clear(gl, 0.2, 0.2, 0.2);
comp.update(gl);
comp.draw(gl);
console.log("comp", comp);
