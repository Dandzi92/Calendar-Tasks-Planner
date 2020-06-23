import React from 'react';
import styles from './styles.module.scss';

const ModeButton = ({ title }) => {
  return <button className={styles.button}>{title}</button>;
};

export default ModeButton;
