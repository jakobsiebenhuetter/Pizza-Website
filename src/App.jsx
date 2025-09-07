import React from 'react';

export default function App() {

    function log(message) {
        console.log(message)
    };

    return (
        <>
            <div><p>Hallo Welt von React</p></div>
            <span>Das ist ein Span zum testen</span>
            <button onClick={() => { log('Hallo Welt von React mit Webpack und Bootstrap :-)!') }}>Klick mich</button>
        </>
    )
}