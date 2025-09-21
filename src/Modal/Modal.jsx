import React, { useState } from "react";
import "./Modal.css";
import TabButton from "../TabButton/TabButton";

// Component composition
export default function Modal({ children, onSelect }) {
  const [ message, setMessage ] = useState();
  function addMessage(message) {
    setMessage(message);
  }
  return (
    <div id="modal">
      <p>{children}</p>
      <button onClick={onSelect}>Alert</button>
      <TabButton title={"Das ist ein Prop"}></TabButton>
      <TabButton onSelect={() => { addMessage('Der Button 2 wurde geclickt')}}></TabButton>
      <TabButton></TabButton>
      <p>{message ? message : 'Es wurde nix gecklickt'}</p>
    </div>

  );
}
