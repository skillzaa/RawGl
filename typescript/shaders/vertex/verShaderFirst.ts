

export default function verShaderFirst():string{

return `

attribute vec2 a_pos;
attribute highp vec3 a_clr;

varying highp vec3 vColor;

void main(void) {
  gl_Position = vec4(a_pos, 0.0 , 1.0);
  vColor = a_clr;
}
`;

}