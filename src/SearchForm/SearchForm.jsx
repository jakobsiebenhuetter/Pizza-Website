import React, { useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

function Modal({ isOpen }) {
  return createPortal(
    <>
      <div id="modal" className={isOpen === "input" ? "open" : ""}>
        <h1>Das ist ein Modal</h1>
      </div>
      <Backdrop isOpen={isOpen}></Backdrop>
    </>,
    document.body
  );
}

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState();

  function handleModal(component) {
    setIsOpen(component);
  }

  return (
    <>
      <input
        onClick={() => {
          handleModal("input");
        }}
        type="text"
        className="form-control me-2 search"
        name="search"
        placeholder="Pizzasuche"
        autoComplete="off"
      />
      <button onClick={() => {handleModal("button")}} className="btn btn-outline-light" type="button"> Suche</button>
      <Modal isOpen={isOpen}></Modal>
    </>
  );
}
