import React from "react";
import "./Modal.css";

export default function Modal({ children }) {
  return (
    <div id="modal">
      <p>{children}</p>
    </div>
  );
}
