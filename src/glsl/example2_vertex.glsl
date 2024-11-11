uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    float wave = sin(pos.x * 5.0 + uTime) * 0.1;
    pos.z += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}