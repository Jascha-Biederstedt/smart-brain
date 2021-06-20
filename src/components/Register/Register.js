import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <div
      className="shadow-5 ba b--black-10 mv4 w-100 mw6 center"
      style={{ borderRadius: '5px' }}
    >
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="name"
                name="name"
                id="name"
                style={{ outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                style={{ outline: 'none' }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                style={{ outline: 'none' }}
              />
            </div>
          </fieldset>
          <div style={{ textAlign: 'center' }}>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent dim pointer f6 dib"
              type="submit"
              value="Register"
              onClick={() => onRouteChange('home')}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
