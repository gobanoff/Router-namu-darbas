import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="btn1">
        HOME PAGE
      </Link>
      <img src="https://i.ytimg.com/vi/3Q9UWd3duo0/default.jpg" alt=""></img>
      <div className="hd">
        <li className="home">HOME</li>
        <li>ABOUT</li>
        <li>SERVICE</li>
        <li>CONTACT</li>
      </div>
    </header>
  );
};

export { Header as default };
