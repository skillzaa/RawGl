#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
precision mediump float;
//////////////////////////////////
vec3 circle(vec2 position){
    vec3 color = vec3(0,0,0);

    float radius = 0.25;
    float distance = length(position); 
    float blur = .009;
    if (position.x >  0.5 ){
        color = vec3(0,0,1);
    }else {
        color = vec3(1,0,0);
    }
    // color = vec3(smoothstep(radius,radius- blur,distance));
    return color;
}
//////////////////////////////////
void main() { 
vec2 position = gl_FragCoord.xy / u_resolution.xy; 
vec3 color = vec3(0,0,0);
        if ( position.x >  0.5 ){
            color = vec3(0,0,1);
        }else {
            color = vec3(1,0,0);
        }
        gl_FragColor = vec4( color ,1); 
}