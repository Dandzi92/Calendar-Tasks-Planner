import React from 'react';

import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { resetToNow } from '../../features/calendar';

const ResetMomentButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(resetToNow())} className={styles.button}>
      Today
    </button>
  );
};

export default ResetMomentButton;
