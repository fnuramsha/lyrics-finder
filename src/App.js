import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Tracks from "./components/tracks/Tracks";
import Lyrics from "./components/tracks/Lyrics";
import Search from "./components/tracks/SearchTracks";
import SearchLyrics from "./components/tracks/SearchLyrics";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search /> <Tracks />
            </>
          }
        />
        <Route path="lyrics/track/:id" element={<Lyrics />} />
        <Route path="lyrics/search" element={<Search />} />
        <Route path="lyrics/searchedLyrics/:id" element={<SearchLyrics />} />
      </Routes>
    </>
  );
}

export default App;
