

export default function verShaderFirst():string{

return `

attribute vec2 a_pos;
attribute highp vec3 a_clr;
varying highp vec3 vColor;

// uniform float u_cosB;
// uniform float u_sinB;

void main(void) {
  // gl_Position.x = a_pos.x * u_cosB - a_pos.y * u_sinB ;
  // gl_Position.y = a_pos.x * u_sinB + a_pos.y * u_cosB ;
  gl_Position.x = a_pos.x;
  gl_Position.y = a_pos.y;
  gl_Position.z = 1.0 ;
  vColor = a_clr;
}
`;

}