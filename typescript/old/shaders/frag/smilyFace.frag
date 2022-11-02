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
vec3 circle(vec2 position,float x,float y,float radius,float blur){

// float blur = .009;
vec2 xy = vec2(x,y);
vec3 color = vec3(1);
position -= xy;
// float radius = 0.25;
float distance = length(position); 
color = vec3(smoothstep(radius,radius- blur,distance));

return color;
}
/////////////////////////
void main(){

vec2 position = gl_FragCoord.xy / u_resolution.xy;
vec3 c = circle(position,0.5,0.5,0.30,0.009);

c -= circle(position,0.4,0.6,0.06,0.009);
c -= circle(position,0.6,0.6,0.06,0.009);
c -= circle(position,0.5,0.4,0.06,0.009);
//--we can multiply
c *= vec3(1,1,0);
gl_FragColor = vec4( c, 1.0 );
}
