import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import fragmentShader from './../glsl/example3_fragment.glsl';
import vertexShader from './../glsl/example3_vertex.glsl';

// ================================
// 1) SETUP THE SCENE
// ================================
const scene = new THREE.Scene(); // Create a new scene

// ================================
// 2) CREATE CAMERA
// ================================
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Set up the camera
camera.position.z = 5; // Move the camera back

// ================================
// 3) CREATE A RENDERER
// ================================
const renderer = new THREE.WebGLRenderer(); // Create a WebGL renderer
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

const controls = new OrbitControls(camera, renderer.domElement);
// controls.update() must be called after any manual changes to the camera's transform
controls.update();

const stats = new Stats();
document.body.appendChild(stats.dom);

// ================================
// 4) ADD A CUBE
// ================================
const geometry = new THREE.TorusGeometry(1, 0.3, 100, 100); // Create a box geometry
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  side: THREE.DoubleSide,
  uniforms: {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
    uDisplace: { value: 2 },
    uSpread: { value: 1.2 },
    uNoise: { value: 16 }
  }
}); // Create a material with green color
const cube = new THREE.Mesh(geometry, material); // Create a mesh with the geometry and material
scene.add(cube); // Add the cube to the scene

// ================================
// 5) ADD AN ANIMATION LOOP
// ================================
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate); // Call animate recursively
  const elapsedTime = clock.getElapsedTime();
  cube.material.uniforms.uTime.value = elapsedTime;
  cube.rotation.z = Math.sin(elapsedTime) / 4 + elapsedTime / 20 + 5;
  controls.update();
  renderer.render(scene, camera);
  stats.update();
}

// ================================
// 6) RESIZE HANDLING
// ================================
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; // Update the aspect ratio
  camera.updateProjectionMatrix(); // Update camera the camera projection matrix
  renderer.setSize(window.innerWidth, window.innerHeight); // Update renderer size
});

animate(); // Start the animation loop

// ================================
// 7) EXAMPLES
// ================================
// https://blobmixer.14islands.com/
// https://eco.com/
// https://arvinleeuwis.xyz/
// https://innovations.vareximaging.com/
// https://ohzi.io/menu
// https://unseen.co/
// https://cineshader.com/

// ================================
// 7) REFERENCIES
// ================================
// https://github.com/visionary-3d/displex-final/
