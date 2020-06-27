import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ModeButton = ({ title, handler }) => {
  return (
    <button onClick={handler} className={styles.button}>
      {title}
    </button>
  );
};

ModeButton.propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func,
};

export default ModeButton;
