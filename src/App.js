import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import AnimeDetails from "./Components/AnimeDetails";
import Animes from "./Components/Animes";

const App = () => {
  

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Animes />} />
        <Route exact path="/animedetails/:id" element={<AnimeDetails />} />
      </Routes>
    </Router>
      
    </>
  );
};

export default App;
