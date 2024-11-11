import * as THREE from 'three';
import fragmentShader from './../glsl/example2_fragment.glsl';
import vertexShader from './../glsl/example2_vertex.glsl';

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

// ================================
// 4) ADD A CUBE
// ================================
const geometry = new THREE.BoxGeometry(); // Create a box geometry
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0.0, 1.0, 0.0) }, // Green color
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }
}); // Create a material with green color
const cube = new THREE.Mesh(geometry, material); // Create a mesh with the geometry and material
scene.add(cube); // Add the cube to the scene

// ================================
// 5) ADD AN ANIMATION LOOP
// ================================
function animate() {
  requestAnimationFrame(animate); // Call animate recursively
  cube.rotation.x += 0.01; // Rote the cube on x-axis
  cube.rotation.y += 0.01; // Rote the cube on y-axis
  renderer.render(scene, camera); // Render the scene from the perspective of the camera
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
