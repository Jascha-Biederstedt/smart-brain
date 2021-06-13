import React from 'react';

const FaceRecognition = ({ imageURL, box }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ position: 'relative', marginTop: '2rem' }}>
        <img
          id="inputImage"
          src={imageURL}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          style={{
            position: 'absolute',
            boxShadow: '0 0 0 3px #149df2 inset',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            top: box.topRow,
            bottom: box.bottomRow,
            left: box.leftCol,
            right: box.rightCol,
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
