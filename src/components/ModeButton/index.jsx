import React from 'react';
import styles from './styles.module.scss';

const ModeButton = ({ title, handler }) => {
  return (
    <button onClick={handler} className={styles.button}>
      {title}
    </button>
  );
};

export default ModeButton;
