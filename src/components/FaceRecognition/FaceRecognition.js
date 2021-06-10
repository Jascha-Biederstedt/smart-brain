import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="mt4" style={{ textAlign: 'center' }}>
      <img src={imageURL} alt="" width="500px" height="auto" />
    </div>
  );
};

export default FaceRecognition;
