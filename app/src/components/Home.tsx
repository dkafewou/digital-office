import React from 'react';
import logo from '../logo.svg';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to your digital office.
        </p>
        <a
          className="App-link"
          href="/office"
        >
          Here
        </a>
      </header>
    </div>
  );
}

export default Home;
