import React, { useState } from 'react';
import AppModal from '../modal';
import {ReactComponent as SettingsIcon} from './settings.svg';
import './index.css';

const AppBlock = ({
  title, 
  actions, 
  children, 
  onOpenModal, 
  onCloseModal, 
  onConfirmModal, 
  modalTitle, 
  modalContent
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    onOpenModal && onOpenModal()
    setIsOpenModal(true)
  }

  const closeModal = () => {
    onCloseModal && onCloseModal()
    setIsOpenModal(false)
  }

  const confirmModal = () => {
    onConfirmModal && onConfirmModal()
    closeModal()
  }

  return (
    <div className="block">
      <div className="block__header">
        <h2 className="block__title">{title}</h2>
        <div className="block__actions">
          {actions}
          {modalContent && (
            <button onClick={openModal}><SettingsIcon /></button>
          )}
        </div>
      </div> 

      <div className="block__body">
        {children}
      </div>

      <AppModal 
        isOpen={isOpenModal} 
        onClose={closeModal}
        onConfirm={confirmModal}
        title={modalTitle}
      >
        {modalContent}
      </AppModal>
    </div>
  );
}

export default AppBlock;
