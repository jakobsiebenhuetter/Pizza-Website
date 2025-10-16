import React, { useState, useRef } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

function Modal({ isOpen, onSelect, isSearch, handleSearch }) {
    const inputValue = useRef();

    function search(e) {
        if(e.key === 'Enter') {
            // let res = fetch() 
            // if(response.length)
            // best practice mit einer callback function also setResponse((bo) => !bo)
            handleSearch(true);
            console.log(inputValue.current.value)
            
            
        }
    }

    let template = '';
    // template =
    //         <ul>
    //             <li>
    //                 Test
    //             </li>
    //         </ul>

    function renderList() {


        if(isSearch) {
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
      {isOpen && <div id="modal" >
        <h1>Gib ein Schlagwort ein</h1>
        <input className="search-field" type="text" placeholder="Pizzasuche" onKeyDown={(e) => {search(e)}} ref={inputValue}/>
        <button onClick={() => {onSelect()}}>Schließen</button>
        
        {template}
      </div>}
      {isOpen && <Backdrop onClose={onSelect}></Backdrop>}
    </>,
    document.body
  );
}

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setSearch] = useState(false);

  function handleModal() {
    setIsOpen(prev => !prev);
    setSearch(false);
    
  }

  return (
    <>
      <input onClick={() => { handleModal() }} type="text" className="form-control me-2 search" disabled={false} name="search" placeholder="Pizzasuche" autoComplete="off"/>
      <button onClick={() => {handleModal()}} className="btn btn-outline-light" type="button"> Suche</button>
      <Modal isOpen={isOpen} onSelect={() => handleModal()} isSearch = {isSearch} handleSearch ={setSearch}></Modal>
     
    </>
  );
}