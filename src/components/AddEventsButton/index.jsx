import React from 'react';
import styles from './styles.module.scss';

const AddEventsButton = ({ handler }) => {
  return (
    <button onClick={handler} className={styles.button}>
      + Add Event
    </button>
  );
};

export default AddEventsButton;
