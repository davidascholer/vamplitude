var container = document.querySelector('.three-d-dice-container');
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 100);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(190, 200);
renderer.setClearColor( 0x000000,0 ); // second param is opacity, 0 => transparent
container.append(renderer.domElement);

// Camera
camera.position.z = 20;

const loader = new THREE.TextureLoader();
const texture = new THREE.TextureLoader().load( "./subpages/demos/dice/Icosahedron_20_dice.png" );
texture.wrapS = THREE.RepeatWrapping;
texture.magFilter = THREE.LinearFilter;
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const materials = new THREE.MeshPhongMaterial({ map: texture });

const Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(10, 0), materials);
Ico.receiveShadow = true;
scene.add(Ico);

var L1 = new THREE.PointLight(0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = 100;
scene.add(L1);

var L2 = new THREE.PointLight(0xffffff, 0.8);
L2.position.z = 100;
L2.position.y = 50;
L2.position.x = -100;
scene.add(L2);

function update() {
    Ico.rotation.x += .005;
    Ico.rotation.y += .005;
}

// Render
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    update();
}

render();