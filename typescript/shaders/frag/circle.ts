

export default function circle(r :number=0 ,g:number=0 ,b:number=1, a:number= 1):string{

    return `
#ifdef GL_ES
precision mediump float;
#endif

precision mediump float;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
//////////////////////////////////
//////////////////////////////////
void main() { 
vec2 position = gl_FragCoord.xy / u_resolution.xy; 
vec2 uv = 2.0 * position - 1.0;

vec3 color = vec3(0,0,0);
        if ( position.x >  0.5 ){
            color = vec3(0,1,1);
        }else {
            color = vec3(1,0,0);
        }
        gl_FragColor = vec4(vec3(uv.x) ,1); 
}
    `;
    
    }