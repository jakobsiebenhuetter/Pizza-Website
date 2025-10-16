import React from "react"
import './Backdrop.css'

export default function Backdrop( {onClose} ) {

    return (
        <>
        <div id="backdrop" onClick={() => {onClose.closeBackdrop(); onClose.setInputToNull('')}}></div>
        </>
    )
}