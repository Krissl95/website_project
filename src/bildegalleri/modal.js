import React from 'react'
import './modal.css'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        // Sjekker at det er diven vi trykker på og ikke bilde. Trykker vi på bilde skal ikke bilde lukkes. Trykker vi utenfor bilde skal bilde lukkes.
        if(e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarget pic" />
        </div>
    )
}

export default Modal;