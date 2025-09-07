import React from 'react';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';

export default function App() {

    function log(message) {
        console.log(message)
    };

    return (
        <>
        {/* <Filter>Filter</Filter> */}
             <Modal>Das ist ein Modal</Modal>
            <div><p>Hallo Welt von React</p></div>
            <span>Das ist ein Span zum testen</span>
            <button onClick={() => { log('Hallo Welt von React mit Webpack und Bootstrap :-)!') }}>Klick mich</button>
        </>
    )
}