import { useState } from "react";
import dataText from "./data";

const App = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <section class="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form class="lorem-form" onSubmit={handleSubmit}>
        <label for="number">Paragraphs:</label>
        <input
          type="number"
          id="number"
          value={number}
          min={1}
          max={8}
          onChange={handleChange}
        />
        <button class="btn" type="submit">
          Generate
        </button>
      </form>
    </section>
  );
};
export default App;
