import React, { useState } from 'react'

const FormDialog = ({ info, userName, onClose }) => {
    
  return (
    <div className="dialog-container">
        <dialog open >
            <h2> Hi {userName}, Your {info} has been received! We will get back to you shortly.</h2>
            <button onClick={onClose}>Ok</button>
        </dialog>
      
    </div>
  )
}

export default FormDialog
