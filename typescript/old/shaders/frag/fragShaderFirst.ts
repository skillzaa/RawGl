

export default function fragShaderFirst(r :number=0 ,g:number=0 ,b:number=1, a:number= 1):string{

return `
varying lowp vec3 vColor;

void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;

}