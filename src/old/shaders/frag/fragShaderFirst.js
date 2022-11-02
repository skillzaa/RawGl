export default function fragShaderFirst(r = 0, g = 0, b = 1, a = 1) {
    return `
varying lowp vec3 vColor;

void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;
}
