#ifdef GL_ES
precision mediump float;
#endif
//vec4 gl_FragCoord, which holds the screen coordinates of the pixel or screen fragment that the active thread is working on. With vec4 gl_FragCoord, we know where a thread is working inside the billboard. In this case we don't call it uniform because it will be different from thread to thread, instead gl_FragCoord is called a varying.

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
//////////////////////////
void main (){
vec2 pix = gl_FragCoord.xy/u_resolution;
    gl_FragColor = vec4( pix.x,pix.y,1,1);

}
//--we also have
//  sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log(), sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max() and clamp().




