import { useState } from "react";
import dataText from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof number);
    const slicedArray = dataText.slice(0, number);
    setText(slicedArray);
  };

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs:</label>
        <input
          type="number"
          id="number"
          value={number}
          min={1}
          max={8}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      {text &&
        text.map((paragraph) => {
          const id = nanoid();
          return (
            <article className="lorem-text" key={id}>
              <p>{paragraph}</p>
            </article>
          );
        })}
    </section>
  );
};
export default App;
