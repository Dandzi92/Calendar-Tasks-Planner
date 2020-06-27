import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';

const ArrowButton = ({ order, handler }) => {
  return (
    <button onClick={handler} className={styles.button}>
      <i className={classnames(styles.arrow, styles[order])} />
    </button>
  );
};

ArrowButton.defaultProps = {
  order: 'left',
};

ArrowButton.propTypes = {
  order: PropTypes.string,
  handler: PropTypes.func,
};

export default ArrowButton;
