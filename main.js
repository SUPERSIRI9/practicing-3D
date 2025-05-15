import * as   THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas= document.getElementById('canvas');//to interact with the scene 

//scene creation
const scene= new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//csmera
const camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z=5;

//object
const geometry =new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color:'#468585',emissive:'#468585'});
const dodecahedron = new THREE.Mesh(geometry,material);//mesh

const boxgeometry =new THREE.BoxGeometry(2, 0.2, 2);
const boxmaterial = new THREE.MeshLambertMaterial({color:'#B6B6B7',emissive:'#B6B6B7'});
const box = new THREE.Mesh(boxgeometry,boxmaterial);//mesh
box.position.y = -1.8;

scene.add(dodecahedron);
scene.add(box);


//light
const light = new THREE.PointLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

//renderer
const renderer=new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth ,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);//adjusting pixel ratio according to device

//add orbit controls
const controls =new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true;//to smooth controls 
controls.dampingFactor=0.05;
controls.enableZoom=true;//enable zoom
controls.enablePan=true;//for pan

//animation
function animate(){
    requestAnimationFrame(animate);
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.005;
    box.rotation.y += 0.005;
    
    controls.update();
    renderer.render(scene,camera);
    

}
//handle window resizing 
window.addEventListener('resize',()=>
    {
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight)


    });

animate();
