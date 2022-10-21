

export default function fragShaderFirst():string{

return `
precision mediump float;
void main() { 
    gl_FragColor = vec4(0,0.8,0,1); 
}
`;

}