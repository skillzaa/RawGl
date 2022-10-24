
//////////////////////////
#ifdef GL_ES
precision mediump float;
#endif
/////////////////////////
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
////////////////////////
void main(){
vec2 position = gl_FragCoord.xy / u_resolution.xy;
vec3 color = vec3(position,0);
gl_FragColor = vec4( color, 1.0 );
}
///////////////////////
// if ( len >= radius){
// 		color = vec3(0.0,0.0,0.0);
// 	}else {
// 		color = vec3(1.0,1.0,1.0);
// }
///////////////////
// function to evaluate  the Bezier curve
vec3 bezier(float u, vec3 p0, vec3 p1, vec3 p2, vec3 p3)
{
    float B0 = (1.-u)*(1.-u)*(1.-u);
    float B1 = 3.*u*(1.-u)*(1.-u);
    float B2 = 3.*u*u*(1.-u);
    float B3 = u*u*u;
 
    vec3 p = B0*p0 + B1*p1 + B2*p2 + B3*p3;
    return p;
}

///---gradiant
//--x axis gradiant
color *= position.x; //coord move b/w 0 and 1
//--y axis gradiant
color *= position.y; //coord move b/w 0 and 1
//--radial gradian 
//vec2 is the centre of circle
color *= length(position - vec2(0.5,0.5));

///--flower

color *= smoothstep(radius, radius - 0.09, q)