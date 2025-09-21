import React from "react"
import './Backdrop.css'

export default function Backdrop( {isOpen} ) {
    return (
        <>
        <div id="backdrop" className={isOpen === 'input' ? 'open': ''}></div>
        </>
    )
}