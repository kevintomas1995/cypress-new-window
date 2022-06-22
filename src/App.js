import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    window.open(`https://www.google.com/search?q=${inputValue}`, "_blank");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <Button
        label="aTag_blank"
        aTag={true}
        href={`https://www.google.com/search?q=${inputValue}`}
      />
      <Button label="window.open" onClick={clickHandler} />
      <input
        type="text"
        placeholder="Type here"
        className="input"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
