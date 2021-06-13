import React, { useState, useEffect, useRef } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import API_KEY from './config';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: API_KEY,
});

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
    setRoute(route);
  };

  useEffect(() => {
    if (loaded.current) {
      app.models
        .predict('a403429f2ddf4b49b307e318f00e528b', imageURL)
        .then(response => {
          const data =
            response.outputs[0].data.regions[0].region_info.bounding_box;
          displayFaceBox(calcFaceLocation(data));
        })
        .catch(error => console.log(error));
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
          <Rank />
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
