import * as THREE from 'three';
//create a scene 
const scene = new THREE.Scene();
scene.background= new THREE.Color('#F0F0F0');

//add the camera
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //75 FOV ,aspect ratio=window by dividing ,near and far planes 
camera.position.z = 5;

//create and add objh
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({color:'#456789',emissive:'#456789'}) //deefault emmisive is black and wont react with light
const cube = new THREE.Mesh(geometry,material);
scene.add (cube);

//add light
const light=new THREE.DirectionalLight(0x9CDBA6, 10)//9cdba6 = color,10= intensity
light.position.set(0,5,5);
scene.add(light)

//add renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//animate the scene


function animate(){ //write animations here
    requestAnimationFrame(animate); //request animations as animate
    cube.rotation.x += 0.01 ;//rotation in x axis
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();