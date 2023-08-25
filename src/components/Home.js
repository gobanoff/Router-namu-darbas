import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hm">
      <h1>REACT PROJECTS</h1>
      <div className="bnt">


      <Link to="/password" className="butn6">
          password
        </Link>

        <Link to="/explore" className="butn6">
          explore
        </Link>

        <Link to="/todo-list" className="butn7">
          todo-list
        </Link>

        <Link to="/video1" className="butn5">
          video-props
        </Link>
      </div>
    </div>
  );
}

export default Home;
