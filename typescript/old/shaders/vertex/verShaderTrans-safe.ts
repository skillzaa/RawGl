

export default function verShaderTrans():string{

return `

attribute vec2 a_pos;
attribute highp vec3 a_clr;

uniform float rotateX;
uniform float rotateY;
uniform float transX;
uniform float transY;
varying highp vec3 vColor;

void main(void) {

  gl_Position =  vec4( 
    rotateX * (a_pos.x + transX),
    rotateY * (a_pos.y + transY),
      0.0 , 1.0);

  vColor = a_clr;
}
`;

}