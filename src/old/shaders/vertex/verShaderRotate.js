export default function verShaderFirst() {
    return `
attribute vec2 a_pos;
attribute highp vec3 a_clr;

uniform float u_cos;
uniform float u_sin;

varying highp vec3 vColor;

void main(void) {
    vColor = a_clr;
    // a_position.x * u_rotation.y + a_position.y * u_rotation.x,
    // a_position.y * u_rotation.y - a_position.x * u_rotation.x);
              gl_Position = vec4(
                ( a_pos.x * u_sin + a_pos.y * u_cos ),
                (a_pos.x * u_sin + a_pos.y * u_cos) ,
               1.0 ,
              1.0);
}
`;
}
