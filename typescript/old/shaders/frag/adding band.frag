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
vec3 color = vec3(1);
vec2 xy = vec2(x,y);
position -= xy;
// float radius = 0.25;
float distance = length(position); 
color = vec3(smoothstep(radius,radius- blur,distance));

return color;
}
/////////////////////////
vec3 smileyFace(vec2 position, float x, float y){
vec3 c = circle(position,x,y,0.30,0.009);

c -= circle(position,(x-0.1),(y+0.1),0.06,0.009);
c -= circle(position,(x + 0.1),(y + 0.1),0.06,0.009);
c -= circle(position,(x),(y-0.1),0.06,0.009);
//--we can multiply
c *= vec3(1,1,0);
return c;
}
vec3 band(float xOry,float start,float end,float blur){
//blur cant be 0    
if (blur <= 0.0 ){blur = 0.001;}
vec3 b1 = vec3(smoothstep(start - blur,start,xOry));
vec3 b2 = vec3(smoothstep(end+blur,end- blur,xOry));

return b1 * b2;
}
vec3 rect(vec2 position){
vec3 c1 = band(position.x,0.4,0.8,0.01);
vec3 c2 = band(position.y,0.4,0.8,0.01);
// c += band(position.x,0.8, 1.0,0.01);
return c1 * c2;
}
/////////////////////////
void main(){

vec2 position = gl_FragCoord.xy / u_resolution.xy;
// vec3 c = smileyFace(position,0.5,0.5);
vec3 c = rect(position);

gl_FragColor = vec4( c, 1.0 );
}
