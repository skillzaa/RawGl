

export default function verShaderFirst():string{

return `attribute vec2 pos;
void main() { 
    gl_Position = vec4(pos, 0, 1);
    gl_PointSize = 5.0;
 }`;    

}