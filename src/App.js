import React from "react";
import "./App.css";
import List from './components/list';

function App() {
  return (
    <>
    <section className="section">
      <div className="hero is-info">
        <div className="hero-body">
          <h1 className="title">My Movies</h1>
          <h2 className="subtitle">search with names......</h2>
        </div>
      </div>
      <List />
    </section>
    </>
  );
}

export default App;
