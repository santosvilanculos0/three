uniform float uTime;
uniform vec3 uColor;
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(vUv, center);

    vec3 color = uColor;
    color.r *= sin(uTime) * 0.5 + 0.5;
    color.b *= cos(uTime) * 0.5 + 0.5;

    float pattern = sin(dist * 10.0 - uTime * 2.0) * 0.5 + 0.5;

    gl_FragColor = vec4(color * pattern, 1.0);
}