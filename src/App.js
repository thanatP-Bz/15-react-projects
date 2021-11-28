import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setText(data);
  };
  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum</h3>
      <form className="lirem-form" onSubmit={handlerSubmit}></form>
      <label htmlFor="amount">paragraph:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button type="submit" className="btn">
        Genetator
      </button>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
