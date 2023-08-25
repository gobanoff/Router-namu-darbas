import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Todo from './components/Todo';
import Video1 from "./components/Video1";
import Explore from "./components/explore/Explore";
import Pass from './components/Pass';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={< Todo/>} />
          <Route path="/video1" element={<Video1 />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/password" element={<Pass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
