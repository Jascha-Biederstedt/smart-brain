import React, { useState, useEffect, useRef } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  const [input, setInput] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signIn');

  const loaded = useRef(false);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onBtnClick = () => {
    setImageURL(input);
  };

  const calcFaceLocation = data => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: data.left_col * width,
      topRow: data.top_row * height,
      rightCol: width - data.right_col * width,
      bottomRow: height - data.bottom_row * height,
    };
  };

  const displayFaceBox = box => {
    setBox(box);
  };

  const onRouteChange = route => {
    if (route === 'signIn') {
      setImageURL('');
    }

    setRoute(route);
  };

  useEffect(() => {
    if (loaded.current) {
      if (imageURL) {
        fetch('http://localhost:3001/imageURL', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageURL }),
        })
          .then(response => response.json())
          .then(response => {
            const data =
              response.outputs[0].data.regions[0].region_info.bounding_box;
            displayFaceBox(calcFaceLocation(data));
          })
          .catch(error => console.log(error));
      }
    } else {
      loaded.current = true;
    }
  }, [imageURL]);

  return (
    <React.Fragment>
      <Particles
        params={particlesOptions}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '-1',
        }}
      />
      {route === 'signIn' ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : route === 'register' ? (
        <Register onRouteChange={onRouteChange} />
      ) : (
        <div>
          <Navigation onRouteChange={onRouteChange} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onBtnClick={onBtnClick}
          />
          <FaceRecognition imageURL={imageURL} box={box} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
