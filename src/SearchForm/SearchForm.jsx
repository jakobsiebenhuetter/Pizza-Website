import React, { useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

function Modal({ isOpen, onSelect, handleSearch, showSearch }) {
    const [inputValue, setInputValue] = useState('');


    function search(e) {
        if(e.key === 'Enter') {
            // let res = fetch() 
            // if(response.length)
            // best practice mit einer callback function also setResponse((bo) => !bo)
            handleSearch(true);
            setInputValue('');
            
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


        if(showSearch) {
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
        <input className="search-field" type="text" placeholder="Pizzasuche" onChange={ (e) => {setInputValue(e.target.value)}} onKeyDown={(e) => {search(e)}} value={inputValue}/>
        <button onClick={() => {onSelect(); setInputValue('')}}>Schließen</button>
        
        {template}
      </div>}
      {isOpen && <Backdrop onClose={{closeBackdrop: onSelect, setInputToNull: setInputValue}}></Backdrop>}
    </>,
    document.body
  );
}

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState(false);

  let isDisabled = isOpen;

  function handleModal() {
    setIsOpen(prev => !prev);
    if(!isOpen) {
      handleSearchResults(false);
    }
  }

  function handleSearchResults(open) {
  
    if(open) {
      setResponse(true);
    } else {
      setResponse(false);
    }
  }

  return (
    <>
      <input onClick={() => { handleModal() }} type="text" className="form-control me-2 search" disabled={false} name="search" placeholder="Pizzasuche" autoComplete="off"/>
      <button onClick={() => {handleModal()}} className="btn btn-outline-light" type="button"> Suche</button>
      <Modal isOpen={isOpen} onSelect={() => handleModal()} handleSearch ={handleSearchResults} showSearch = {response}></Modal>
     
    </>
  );
}