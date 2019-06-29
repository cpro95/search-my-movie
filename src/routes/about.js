import React from 'react';
import Header from '../components/header';

const About = () => {
  return (
    <section>
      <Header />
      <div className="container-fluid">
        <p>This SPA app is made by ReactJS with Bootstrap CSS</p>
        <p>You can search your movie inside of your KODI DB</p>
      </div>
    </section>
  );
};

export default About;
