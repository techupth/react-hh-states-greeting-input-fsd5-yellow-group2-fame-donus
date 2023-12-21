import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting");
  const [newGreeting, setNewGreeting] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => setNewGreeting(e.target.value)}
          value={newGreeting}
        />
      </div>

      <div className="buttons">
        <button
          on
          onClick={() => {
            setGreeting(newGreeting);
            setNewGreeting("");
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
