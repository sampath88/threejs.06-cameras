import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  //   wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
// const camera = new THREE.PerspectiveCamera(
//   /* Field of view: */ 75,
//   /* Aspect Ratio: */ sizes.width / sizes.height,
//   /* Near: */ 0.1,
//   /* Far: */ 100
// );

const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

const tick = () => {
  let elapsedTime = clock.getElapsedTime();

  mesh.rotation.y = elapsedTime;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
