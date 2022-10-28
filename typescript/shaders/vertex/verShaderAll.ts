

export default function verShaderTrans():string{

return `

attribute vec2 a_coords;
uniform mat4 u_transform;
void main() {
   vec3 transformedCoords = u_transform * vec3(a_coords,1.0);
   gl_Position = vec4(transformedCoords.xy, 0.0, 1.0);
`;

}