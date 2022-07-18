import './App.css';
import React from 'react';
//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//images
import cafe from "./images/sunnyCafe.jpg";
import coffeeBoard from "./images/coffeeBoard.jpg";
import brew from "./images/brew.jpg";
import Introduction from './components/Introduction';
import Menu from './components/Menu';
import Cafe from "./components/slideshow/Cafe";
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';


//insert custom images for slideshow.
const images = [brew, cafe, coffeeBoard]
const delay = 5000;

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
              <Cafe url={image}/>
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
        <div className="scroll" id='intro'>
          <h3 style={{marginBottom:"10px"}}>
            Who We Are?
          </h3>
    <span className='arrow'>
      <a href='#intro'>
        <i className="fa-solid fa-bounce fa-angles-down"></i>
      </a>
    </span>
    </div>  

        <div className="image one">
          <Introduction />
        </div>
        <div class="scroll" id='Reviews'>
          <h3>
            REVIEWS
          </h3>
        </div>

        <div className="image two">
          <Reviews />
        </div>
        <div class="scroll" id='menu'>
        <h3 id='menu'>
            MENU
        </h3>
        </div>

        <div className="image three">
          <Menu />
        </div>
        <div class="scroll" id='reservation'>
        <h3>
          RESERVATION
        </h3>
      </div>

        <div className="image four">
          <Reservation />
        </div>
        <Footer />
    </div>
  );
}

export default App;
