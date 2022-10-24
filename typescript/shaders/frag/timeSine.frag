#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
void main (){

    gl_FragColor = vec4( abs(sin(u_time)) ,0,1,1);

}
//--we also have
//  sin(), cos(), tan(), asin(), acos(), atan(), pow(), exp(), log(), sqrt(), abs(), sign(), floor(), ceil(), fract(), mod(), min(), max() and clamp().




