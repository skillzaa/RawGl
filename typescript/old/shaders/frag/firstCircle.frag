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
vec3 circle(vec2 position){
vec3 color = vec3(1);
position -= 0.5;
float radius = 0.25;
float distance = length(position); 
float blur = .009;
color = vec3(smoothstep(radius,radius- blur,distance));
return color;
}
/////////////////////////
void main(){
vec2 position = gl_FragCoord.xy / u_resolution.xy;
gl_FragColor = vec4( circle(position), 1.0 );
}
