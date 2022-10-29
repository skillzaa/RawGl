import BaseCoreComp from "./baseCoreComp.js";
const vertexShaderSrc = `
attribute highp vec2 a_pos;
void main(void) {
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
}
`;
const fragShaderSrc = `
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
`;
export default class CoreTri extends BaseCoreComp {
    constructor() {
        super();
        this.color = null;
    }
    init(gl) {
        super.init(gl, vertexShaderSrc, fragShaderSrc);
        this.setAttribute(gl, "a_pos", 2, 4 * 2, 0);
        this.color = this.getUniformLocation(gl, "u_Color");
    }
    update(gl) {
        gl.uniform3fv(this.color, [1, 0, 1]);
        super.update(gl);
    }
}
