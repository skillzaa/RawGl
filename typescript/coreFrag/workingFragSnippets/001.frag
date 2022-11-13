/*
function call
*/

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
// uniform float u_time;

vec4 mainImage( out vec4 fragColor , in vec2 fragCoord ){
    fragColor = vec4 ( 1, 1, 0,      1);
    return fragColor;
}
void main(){
    mainImage (gl_FragColor , gl_FragCoord.xy );
//--this line is also working
// gl_FragColor = vec4(fract(gl_FragCoord.xy / u_resolution.xy), 0, 1);
}

//working lines 
// fragColor = vec4 ( fragCoord.x / 400.0, fragCoord.y , 0,      1);
