import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";

function App() {
  return (
    <>
      <PrimaryButton modifiers="small" >Hello world</PrimaryButton>
      <SecondaryButton modifiers={["large", "warning"]} >Hello world</SecondaryButton>
      <TertiaryButton modifiers="warningSecondary" >Hello world</TertiaryButton>
      <GlobalStyle />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));