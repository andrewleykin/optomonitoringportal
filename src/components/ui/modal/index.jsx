import React from 'react';
import Modal from 'react-modal';
import './index.css'

Modal.setAppElement('#root')

const AppModal = ({isOpen, onClose, onConfirm, children, title}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      ariaHideApp={false} 
      shouldCloseOnEsc 
      shouldCloseOnOverlayClick 
      onRequestClose={onClose}
      className="app-modal"
      style={{overlay: {
        backgroundColor: 'rgba(0,64,101,.4)',
        zIndex: 99999
      }}}
    >
      <button className="app-modal__close" onClick={onClose}>X</button>
      <h3 className="app-modal__title">{title}</h3>
      <div className="app-modal__body">
        {children}
      </div>
      <div className="app-modal__actions">
        <button className="app-modal__btn success" onClick={onConfirm}>Применить</button>
        <button className="app-modal__btn cancel" onClick={onClose}>Отменить</button>
      </div>
    </Modal>
  );
}

export default AppModal;
