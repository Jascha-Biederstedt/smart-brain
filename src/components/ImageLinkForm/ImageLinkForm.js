import React from 'react';

const ImageLinkForm = ({ onInputChange, onBtnClick }) => {
  return (
    <div>
      <p className="white f3" style={{ textAlign: 'center' }}>
        This Magic Brain will detect faces in your pictures.
        <br />
        Insert a URL of an image and give it a try.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          className="f4 pa2 w-70 center shadow-5"
          onChange={onInputChange}
          style={{
            margin: '.5rem 0 1rem',
            outline: 'none',
            border: 'none',
            borderRadius: '5px',
          }}
        ></input>
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple shadow-5"
          onClick={onBtnClick}
          style={{ borderRadius: '5px', outline: 'none' }}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
