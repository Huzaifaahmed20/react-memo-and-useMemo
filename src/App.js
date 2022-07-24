import { useReducer } from "react";
import "./App.css";
import { ACTION_TYPES, INITIAL_STATE, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleChange = (ev) => {
    const inputName = ev.target.name;
    const value = ev.target.value;

    dispatch({
      type: ACTION_TYPES.SET_USER,
      payload: {
        [inputName]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="fname"
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            onChange={handleChange}
            type="text"
            id="lname"
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input onChange={handleChange} type="number" id="age" name="age" />
        </div>
        <div>
          <label htmlFor="experience">Experience (years)</label>
          <input
            onChange={handleChange}
            type="number"
            id="experience"
            name="experience"
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
