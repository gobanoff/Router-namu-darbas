import { useState } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

const Todo = () => {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  return (
    <div className="todo">
      <div className="container mb-5">
        <h1>Užduočių tvarkyklė</h1>
        {/* ToDo Listo forma */}
        <form
          className="input-group mb-5 "
          onSubmit={(e) => {
            e.preventDefault();
            //console.log(value);
            //Paimame visas prieš tai buvusias reikšmes iš list masyvo ir įdedame į naują masyvą.
            //Pabaigoje įrašome naują reikšmę į masyvą
            //Reikšmes išsaugome su setList funkcija
            setList([...list, { value, done: false }]);
          }}
        >
          <input
            type="text"
            placeholder="Įveskite užduotį"
            className="form-control"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="primary">Pridėti</button>
        </form>
        {list.map((data, index) => (
          <li className="d-flex justify-content-between my-2" key={index}>
            {editIndex === index ? (
              <input
                type="text"
                className="for"
                value={data.value}
                onChange={(e) => {
                  const updatedList = [...list];
                  updatedList[index].value = e.target.value;
                  setList(updatedList);
                }}
              />
            ) : (
              <span
                style={{ textDecoration: data.done ? "line-through" : "none" }}
                onClick={(e) => {
                  const updatedList = [...list];
                  updatedList[index].done = true;
                  setList(updatedList);
                }}
              >
                {data.value}
              </span>
            )}
            <button
              className="info"
              onClick={(e) => {
                if (editIndex === index) {
                  setEditIndex(-1);
                } else {
                  setEditIndex(index);
                }
              }}
            >
              {editIndex === index ? "Save" : "Edit"}
            </button>
            <button
              className="danger"
              onClick={(e) => {
                const updatedList = list.filter((_, i) => i !== index);
                setList(updatedList);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </div>

      <Link to="/" className="btn2">
        HOME PAGE
      </Link>
    </div>
  );
};

export default Todo;
