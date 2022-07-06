import './App.css';
import cafe from "./images/sunnyCafe.jpg";
import coffee from "./images/coffee.jpg";
import coffeeBean from "./images/coffeeBean.jpg";
import React from 'react';

const images = [cafe, coffee, coffeeBean]
const delay = 5000;

function SlideShow () {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className='SlideShow'>
      <div className='Slider' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, index) => {
          return (
            <div className='Slide' key={index}>
              <img src={image} alt="" style={{width:"600px", height: "600px"}}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <div>
        <h1>Logo, menu, etc</h1>
        <SlideShow />
      </div>
    </div>
  );
}

export default App;
