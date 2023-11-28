Cube Component
A React component rendering a rotating cube with customizable color and size using Three.js.

Usage
jsx
Copy code
import Cube from './components/Cube';

const App = () => {
  return <Cube color={0x00ff00} size={1} />;
};
Props
color (optional): Hexadecimal color (default: 0x00ff00).
size (optional): Cube size (default: 1).
Features
Scene, camera, and renderer setup.
Responsive cube rotation.
Cleanup on unmount.
Dependencies
React
Three.js
Installation
Install dependencies:
bash
Copy code
npm install react three
Copy Cube.js to your components.

Use the Cube component.

Enjoy the rotating cube! 🚀
