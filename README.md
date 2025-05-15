# practicing-3D
just tried to make a 3d interactable website with Dodecahedron

notes:

make a folder and add a html file to it
add html base code from installation tab of three.js doc 
add a javascript file named main.js
Getting Started | Vite
install NPM and then copy link from ‘Scaffolding Your First Vite Project’ 
(0.170.0 —three version)

make a new folder named vite open it in terminal and paste the link to create vite@latest
state project name (./ for creating in current file)
select framework vanilla for normal html
select javascript or typescript
now run ‘npm install’  then ’npm i three’ to install 3 js
then run npm ’npm run dev’ select the localhost and follow the link to run localhost

*scene -> camera -> object -> light -> renderer -> orbit control -> animations -> handle window resizing

add a canvas component and call it in html to interact with the scene

orbit controls
import {orbitControls} from 'three/addons';
enable damping ,pan , zoom

window resizing handler
//handle window resizing 
window.addEventListener('resize',()=>
    {
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight)
    });

3js imperetive code 
(everything in website , messy ,hard for bigger projects)
react 3 fiber R3F 
declarative code , don’t have to declare everything in code
describe how scene will be 
no updating of scene
components ,hooks ,state management features of react can be used

drei (extends R3F)
provides readymade components like camera, gizmo, loaders etc
