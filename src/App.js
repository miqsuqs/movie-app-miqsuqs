import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import MoviePage from "./components/MoviePage";

function App() {
  const [currentMovieID, setCurrentMovieID] = useState(null);
  console.log(currentMovieID);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage setCurrentMovieID={setCurrentMovieID} />}
        />
        <Route
          path="/moviepage"
          element={<MoviePage currentMovieID={currentMovieID} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
