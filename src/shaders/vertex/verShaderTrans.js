export default function verShaderTrans() {
    return `

attribute vec2 a_pos;
attribute highp vec3 a_clr;

uniform float cosR;
uniform float sinR;
uniform float transX;
uniform float transY;

varying highp vec3 vColor;
// x1 = cos(r) * x - sin(r) * y
// y1 = sin(r) * x + cos(r) * y
void main(void) {

  gl_Position =  vec4( 
    transX + (cosR * a_pos.x - sinR * a_pos.y  ),
    transY + (sinR * a_pos.x + cosR *  a_pos.y ),
      0.0 , 1.0);

  vColor = a_clr;
}
`;
}
