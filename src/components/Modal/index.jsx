import React from 'react';
import styles from './styles.module.scss';

const Modal = ({ children, handleClose, isOpened }) => {
  if (!isOpened) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <span className={styles.close} onClick={handleClose}>
          +
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
