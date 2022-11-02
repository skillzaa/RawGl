

export default function fragShaderFirst(r :number=0 ,g:number=0 ,b:number=1, a:number= 1):string{

return `
precision mediump float;
void main() { 
    gl_FragColor = vec4(${r},${g},${b},${a}); 
}
`;

}