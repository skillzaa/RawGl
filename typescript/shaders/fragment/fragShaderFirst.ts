

export default function fragShaderFirst(r :number=1 ,g:number=0 ,b:number=0, a:number=1):string{

return `
precision mediump float;
void main() { 
    gl_FragColor = vec4(${r},${g},${b},${a}); 
}
`;

}