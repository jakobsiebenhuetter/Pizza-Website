import React from 'react';
import Filter from './Filter/Filter';
import Modal from './Modal/Modal';
import { data } from './data/dummyData';
import TabButton from './TabButton/TabButton';

export default function App() {

    function log(message) {
        console.log(message)
    };

    return (
        <>
        <Modal onSelect={ () => { log('Test') } }>Das ist ein Modal</Modal>
        <div><p>Hallo Welt von React</p></div>
        <span>Das ist ein Span zum testen</span>
        <button onClick={() => { log('Hallo Welt von React mit Webpack und Bootstrap :-)!') }}>Klick mich</button>     
        </>
    )
}