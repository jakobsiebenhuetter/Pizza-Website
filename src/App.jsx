import React from 'react';

export default function App() {

    function log() {
        console.log('Hallo Welt von React mit Webpack und Bootstrap :-)!')
    };

    return (
        <>
            <div><p>Hallo Welt von React</p></div>
            <span>Das ist ein Span zum testen</span>
            <button onClick={() => { log() }}>Klick mich</button>
        </>
    )
}