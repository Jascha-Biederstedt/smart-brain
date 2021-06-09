import React from 'react';

const ImageLinkForm = () => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        This Magic Brain will detect faces in your pictures.
        <br />
        Insert a URL and give it a try.
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
          style={{
            margin: '.5rem 0 1rem',
            outline: 'none',
            border: 'none',
            borderRadius: '5px',
          }}
        ></input>
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple shadow-5"
          style={{ borderRadius: '5px', outline: 'none' }}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
