import "./Modal.css"

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modals');

const Modal = ({ onClose }) => {
  useEffect(() => {
    console.log('Modal is mounted');
    return () => {
      console.log('Modal is unmounted');
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={handleClose}>X</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tortor eget metus vehicula luctus.</p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
