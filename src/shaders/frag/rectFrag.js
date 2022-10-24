export default function rectFrag(r = 1, g = 0, b = 0, a = 1) {
    return `
#ifdef GL_ES
precision mediump float;
#endif
/*
- coordinates go from 0 to 1
*/
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

//////////////////
vec3 rect(vec2 position,float x, float y, float width,float height,float blur){

vec3 color = vec3(${r},${g},${b},${a});
float rightEdge = x + width; 
float topEdge = y + height; 
if ((position.x > x ) && (position.x < rightEdge)) {
    if ((position.y > y ) && (position.y < topEdge)) {
    color = vec3(0.8);
    }
}
return color;
}
/////////////////////////
void main(){
vec2 position = gl_FragCoord.xy / u_resolution.xy;
//-----------------------------
vec3 color = rect(position, 0.0 , 0.0 , 1.0 ,1.0 ,0.009);
//------------------------
gl_FragColor = vec4( color , 1.0 );
}

`;
}
