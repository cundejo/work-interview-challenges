import React, {useState} from 'react';

function Slides({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNav = (newIndex) => {
    setCurrentIndex(newIndex);
  }

  const slide = slides[currentIndex];

  return (
      <div>
          <div id="navigation" className="text-center">
              <button
                data-testid="button-restart"
                className="small outlined"
                disabled={currentIndex === 0}
                onClick={()=>handleNav(0)}>Restart</button>
              <button
                data-testid="button-prev"
                className="small"
                disabled={currentIndex === 0}
                onClick={()=>handleNav(currentIndex-1)}>Prev</button>
              <button
                data-testid="button-next"
                className="small"
                disabled={currentIndex === slides.length - 1}
                onClick={()=>handleNav(currentIndex+1)}>Next</button>
          </div>
          <div id="slide" className="card text-center">
              <h1 data-testid="title">{slide.title}</h1>
              <p data-testid="text">{slide.text}</p>
          </div>
      </div>
  );

}

export default Slides;
