import React, { useState } from 'react';
import AppModal from '../modal';
import {ReactComponent as SettingsIcon} from './settings.svg';
import {ReactComponent as HCollapseIcon} from './hCollapse.svg';
import {ReactComponent as VCollapseIcon} from './vCollapse.svg';
import './index.css';

const AppBlock = ({
  title, 
  actions, 
  children, 
  onOpenModal, 
  onCloseModal, 
  onConfirmModal, 
  modalTitle, 
  modalContent,
  isHorizontalCollapse = false,
  isVerticalCollapse = false,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHCollaple, setHCollaple] = useState(false);
  const [isVCollaple, setVCollaple] = useState(false);

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

  const toggleHCollaple = () => setHCollaple(!isHCollaple);
  const toggleVCollaple = () => setVCollaple(!isVCollaple);

  return (
    <div className={`block ${isHCollaple ? 'h_collaple' : ''} ${isVCollaple ? 'v_collaple' : ''}`}>
      <div className="block__header">
        <h2 className="block__title">{title}</h2>
        <div className="block__actions">
          {!isHCollaple && (
            <>
              {actions}
            </>
          )}
          {isHorizontalCollapse && (
            <button onClick={toggleHCollaple}><HCollapseIcon /></button>
          )}
          {isVerticalCollapse && (
            <button onClick={toggleVCollaple}><VCollapseIcon /></button>
          )}
          {modalContent && !isHCollaple && (
            <button onClick={openModal}><SettingsIcon /></button>
          )}
        </div>
      </div> 

      {!isHCollaple && !isVCollaple && (
        <div className="block__body">
          {children}
        </div>
      )}


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
