// components/Cube.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Cube = ({ color = 0x00ff00, size = 1 }) => {
  const cameraRef = useRef(null);

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, 800 / 800, 0.1, 1000);
    camera.position.z = 50;
    camera.position.x = (window.screenLeft  * 0.13) - 50;
    camera.position.y = -(window.screenTop  * 0.13) + 1;

    // Assign the camera reference to be used inside setInterval
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 800);
    const container = document.getElementById('cube-container');
    container.appendChild(renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    
    scene.add(cube);

    

    // Rotate cube
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = 800 / 800;
      camera.updateProjectionMatrix();
      renderer.setSize(800, 800);
    };

    window.addEventListener('resize', handleResize);

    // Update cube position every 10 milliseconds
    const updateCubePosition = () => {
      if (cameraRef.current) {
        cameraRef.current.position.x  = (window.screenLeft  * 0.13) - 50;
        cameraRef.current.position.y  = -(window.screenTop  * 0.13) + 1;
      }
    };

    const intervalId = setInterval(updateCubePosition, 10);

    // Clean up on component unmount
    return () => {
      // Clear the interval
      clearInterval(intervalId);

      // Dispose of the Three.js scene, camera, and renderer
      renderer.dispose();

      // Remove the renderer canvas element from the container
      container.removeChild(renderer.domElement);

      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return <div id="cube-container" />;
};

export default Cube;
