import React from 'react';

const SignIn = () => {
  return (
    <div
      className="shadow-5 ba b--black-10 mv4 w-100 mw6 center"
      style={{ borderRadius: '5px' }}
    >
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
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
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3" style={{ textAlign: 'center' }}>
            <a href="#0" className="f6 link dim black db">
              Register
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
