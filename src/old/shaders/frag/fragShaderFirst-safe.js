export default function fragShaderFirst(r = 0, g = 0, b = 1, a = 1) {
    return `
precision mediump float;
void main() { 
    gl_FragColor = vec4(${r},${g},${b},${a}); 
}
`;
}
