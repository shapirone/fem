import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton from "./components/Buttons";

function App() {
  return (
    <PrimaryButton>Hello world</PrimaryButton>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));