import React, { useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import TabButton from "../TabButton/TabButton";

function Modal({ isOpen, onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(false);

    let template = '';

    function search(e) {
        if(e.key === 'Enter') {
            // let res = fetch() 
            // if(response.length)
            setResponse(true)
         
        }
    }

    function renderList() {

        if(response) {
            template = 
            <ul>
                <li>
                    Test
                </li>
            </ul>
        }
    };

    renderList();
        
  return createPortal(
    <>
      {isOpen && <div id="modal">
        <h1>Gib ein Schlagwort ein</h1>
        <input type="text" placeholder="Pizzasuche" value={inputValue} onChange={ (e) => {setInputValue(e.target.value)}} onKeyDown={(e) => {search(e)} }/>
        <TabButton title="Suchen" onSelect={ () => { alert(inputValue) }} ></TabButton>
        <button onClick={onSelect}>Schließen</button>
        
        {template}
      </div>}
      {isOpen && <Backdrop onClose={onSelect}></Backdrop>}
    </>,
    document.body
  );
}

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState();
  let isDisabled = isOpen;

  function handleModal() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <input onClick={() => { handleModal() }} type="text" className="form-control me-2 search" disabled={isDisabled} name="search" placeholder="Pizzasuche" autoComplete="off"/>
      <button onClick={() => {handleModal()}} className="btn btn-outline-light" type="button"> Suche</button>
      <Modal isOpen={isOpen} onSelect={() => handleModal()}></Modal>
    </>
  );
}
