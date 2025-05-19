// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// ) 

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './index.css'

// Background component for dynamic effects
const DynamicBackground = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate floating shapes
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach(shape => {
      // Randomize animation properties
      const duration = Math.floor(Math.random() * 30) + 20;
      const delay = Math.floor(Math.random() * 10);
      shape.style.animationDuration = `${duration}s`;
      shape.style.animationDelay = `${delay}s`;
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate gradient position based on mouse movement
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const gradientX = (mousePosition.x / windowWidth) * 100;
  const gradientY = (mousePosition.y / windowHeight) * 100;

  return (
    <div className="background-container">
      <div 
        className="dynamic-gradient"
        style={{
          background: `radial-gradient(
            circle at ${gradientX}% ${gradientY}%, 
            rgba(96, 165, 250, 0.15) 0%, 
            rgba(59, 130, 246, 0.05) 45%, 
            rgba(209, 213, 219, 0.1) 100%
          )`
        }}
      ></div>
      
      <div className="mesh-grid"></div>
      
      {/* Floating shapes */}
      {Array(6).fill().map((_, index) => {
        const size = Math.floor(Math.random() * 100) + 50;
        const top = Math.floor(Math.random() * 100);
        const left = Math.floor(Math.random() * 100);
        
        return (
          <div
            key={index}
            className="floating-shape"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: top + 'vh',
              left: left + 'vw',
            }}
          />
        );
      })}
    </div>
  );
};

// Root component that wraps both background and router
const Root = () => (
  <>
    <DynamicBackground />
    <RouterProvider router={router} />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);