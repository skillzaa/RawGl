import BaseTriComp from "./baseTriComp.js";
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute highp vec3 a_clr;
varying highp vec3 v_clr;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = 1.0;
    gl_Position = vec4(a_pos.x, a_pos.y,1.0,1.0 );
}
`;
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
} 
`;
export default class TriComp extends BaseTriComp {
    constructor() {
        super();
    }
}
