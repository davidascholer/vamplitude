import * as THREE from 'https://unpkg.com/three@0.108.0/build/three.module.js';


// Loading
const textureLoader = new THREE.TextureLoader();

// Texture
const normalTexture = textureLoader.load('./assets/img/nasamap.jpeg');

// Canvas
const canvas = document.querySelector('canvas.webgl'); 

// Scene
const scene = new THREE.Scene()

// Object
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const geometry = new THREE.SphereBufferGeometry( 1, 64, 64 );

// Materials
const material = new THREE.MeshLambertMaterial( { map: normalTexture } );

// Mesh
const sphere = new THREE.Mesh(geometry,material);
scene.add(sphere)  

// Lights
const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
pointLight.position.set( 3, 1, 3 );
pointLight.intensity = 2;
scene.add( pointLight );

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(80, 1/1, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

/**
 * Renderer
 */
//alpha:true to set background to transparent
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
// renderer.setSize(window.innerWidth*.5, innerWidth*.5);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .25 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()