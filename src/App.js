import './App.css';
import React from 'react';
//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//images
import cafe from "./images/sunnyCafe.jpg";
import coffeeBoard from "./images/coffeeBoard.jpg";
import brew from "./images/brew.jpg";

const images = [brew, cafe, coffeeBoard]
const delay = 3000;

function SlideShow () {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
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
              <img src={image} alt="" style={{width:"100%", height: "600px"}}></img>
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
        <NavBar />
        <SlideShow />
        <div class="scroll">
        <h3>
          arrow down , introduction of the cafe
        </h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
      </div>        
        <div className="image one">
        </div>
        <div class="scroll">
        <h3>
          Detail of the cafe and advantage
        </h3>
      </div>
        <div className="image two"></div>
        <div class="scroll">
        <h3>
            menu
        </h3>
      </div>
        <div className="image three"></div>
        <div class="scroll">
        <h3>
          reservation
        </h3>
      </div>
        <div className="image four"></div>
        <Footer />
    </div>
  );
}

export default App;
