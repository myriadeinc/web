import React, { useRef } from 'react';
import * as THREE from 'three';
import { useRender } from 'react-three-fiber';


const LIGHT_PURPLE = "#b388ff";
const PURPLE = "#651fff";
const INDIGO = "#3d5afe";
const WHITE = "#ffffff";
const BLUE = '#0052eb';
const OCEAN = '#001c5e';

const ORANGE_1 = '#de5100';
const ORANGE_2 = '#f59527';
const ORANGE_3 = '#de5100';
const ORANGE_4 = '#de5100';
const ORANGE_5 = '#de5100';


let mat = new THREE.MeshPhongMaterial({
  color: WHITE,
  flatShading: true,
});

let wireframeMat = new THREE.MeshPhongMaterial({
  color: WHITE,
  wireframe: true,
});

const Scene = () => {
  const isoRef = useRef()
  const wireframeIsoRef = useRef()
  const particlesXRef= useRef()
  const particlesYRef = useRef()

  const createOctahedron = (radius) => {
    return new THREE.OctahedronGeometry(radius, 1);
  }

  const createPolysphere = (radius) => {
    return new THREE.IcosahedronGeometry(radius, 2);
  }

  const createParticles = (numParticles) => {
    return new THREE.Object3D();
  }

  useRender(() => {
    particlesXRef.current.rotation.x -= 0.005;
    particlesYRef.current.rotation.y += 0.005;
    wireframeIsoRef.current.rotation.x += 0.002;
    wireframeIsoRef.current.rotation.y -= 0.002;
    isoRef.current.rotation.x += 0.001;
    isoRef.current.rotation.y -= 0.003;
  });

  const smallIso = createPolysphere(1.2);
  const bigIso = createOctahedron(1.8);
  const particlesX = createParticles(150);
  const particlesY = createParticles(150);

  return (
    React.createElement('group', null,
      React.createElement('directionalLight', {position: [1, 0, 0], color: BLUE, intensity: 1.0}),
      React.createElement('directionalLight', {position: [0.75, 1, 0.5], color: PURPLE, intensity: 0.4}),
      React.createElement('directionalLight', {position: [-0.25, -1, 0.5], color: ORANGE_1, intensity: 0.9}),
      React.createElement('directionalLight', {position: [1, 0, 0], color: ORANGE_2, intensity: 0.7}),
      React.createElement('ambientLight', {color: LIGHT_PURPLE, position: [0, 0, 1], intensity: 0.3}),
      React.createElement('mesh', {geometry: smallIso, material: mat, ref: isoRef}),
      React.createElement('mesh', {geometry: bigIso, material: wireframeMat, ref: wireframeIsoRef}),
      React.createElement('primitive', {object: particlesX, ref: particlesXRef}),
      React.createElement('primitive', {object: particlesY, ref: particlesYRef})
    )
  );
}

export default Scene