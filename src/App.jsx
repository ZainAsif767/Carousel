import Carousel from './Components/Carousel/Carousel.jsx';
import Card from './Components/ProductCard/Card.jsx';
import Button from './Components/Button/Button.jsx';

import './App.css';
import { useState } from 'react';

export default function App() {
  const [showComponent, setShowComponent] = useState(false);


  function handleClick() {
    setShowComponent((prevShowComponent) => !prevShowComponent);
  }
  return (
    <div className="App">
      <div className="button-container">
        <button onClick={handleClick}>Toggle</button>
      </div>
      <div className="container">
        {showComponent ? <Card /> : <Carousel />}
      </div>
      {/* <Button /> */}
    </div>
  );
}