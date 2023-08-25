import "./Pass.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pass() {
  const [length, setLength] = useState();
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);

  const [data, setData] = useState([]);

  const lowLetters = "abcdefghijklmnopqrstuvwxyz";
  const upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numb = "0123456789";
  const symb = "!@#$%^&*()-_+=<>?";

  useEffect(() => {
    const savedPasswords =
      JSON.parse(localStorage.getItem("savedPasswords")) || [];
    setData(savedPasswords);
  }, []);

  const genPassword = (length, number, symbol) => {
    let valChar = lowLetters + upLetters;
    if (number) {
      valChar += numb;
    }
    if (symbol) {
      valChar += symb;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const ranIndex = Math.floor(Math.random() * valChar.length);
      password += valChar[ranIndex];
    }

    return password;
  };

  const handPassword = () => {
    const newPassword = genPassword(length, number, symbol);
    const updatedPasswords = [...data, newPassword];
    setData(updatedPasswords);
    localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));
  };

  return (
    <div className="App">
      <h1>
        Need a password? Try the 1Password Strong <br />
        Password Generator.
      </h1>

      <input className="control" type="text" />
      <input
        className="nr"
        type="number"
        min="6"
        max="50"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />
      <label className="pass"> Password length</label>
      <input
        className="numb"
        type="checkbox"
        checked={number}
        onChange={() => setNumber(!number)}
      />
      <label> Numbers</label>
      <input
        className="symb"
        type="checkbox"
        checked={symbol}
        onChange={() => setSymbol(!symbol)}
      />
      <label> Symbols</label>
      <button className="gen" onClick={handPassword}>
        Generate Password
      </button>
      <p className="rez">
        {data.map((password, index) => (
          <p key={index}>{password}</p>
        ))}
      </p><Link to="/" className="btn2">
    HOME PAGE
  </Link>
    </div>
  );
}

export default Pass;
