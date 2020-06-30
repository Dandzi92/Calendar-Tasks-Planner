import React, { useState } from 'react';
import styles from './styles.module.scss';
import ModeButton from '../ModeButton';
import AddEventsButton from '../AddEventsButton';
import DateChanger from '../DateChanger';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../features/calendar';
import Modal from '../Modal';
import AddEventForm from '../AddEventForm';

const Header = () => {
  const dispatch = useDispatch();
  const [isModalOpened, toggleModal] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.modes}>
        <ModeButton
          handler={() => {
            dispatch(changeMode('month'));
          }}
          title={'Month'}
        />
        <ModeButton
          handler={() => {
            dispatch(changeMode('week'));
          }}
          title={'Week'}
        />
        <ModeButton
          handler={() => {
            dispatch(changeMode('day'));
          }}
          title={'Day'}
        />
      </div>
      <DateChanger />
      <AddEventsButton handler={() => toggleModal(true)} />
      <Modal isOpened={isModalOpened} handleClose={() => toggleModal(false)}>
        <AddEventForm />
      </Modal>
    </header>
  );
};

export default Header;
