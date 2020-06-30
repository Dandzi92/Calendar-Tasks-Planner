import React from 'react';
import styles from './styles.module.scss';

const AddEventForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.title}>New Event</div>
      <div className={styles['group']}>
        <label className={styles['name-label']} htmlFor="name">
          Name
        </label>
        <input className={styles['name-field']} type="text" name="name" id="name" />
      </div>
      <div className={styles['group']}>
        <label className={styles['description-label']} htmlFor="description">
          Description
        </label>
        <input
          className={styles['description-field']}
          type="text"
          name="description"
          id="description"
        />
      </div>
      <div className={styles['group']}>
        <label className={styles['date-label']} htmlFor="date">
          Date
        </label>
        <input className={styles['date-field']} type="date" name="date" id="date" />
      </div>
      <div className={styles['group']}>
        <label className={styles['start-label']} htmlFor="start">
          Time from
        </label>
        <input className={styles['start-field']} type="time" name="start" id="start" />
      </div>
      <div className={styles['group']}>
        <label className={styles['finish-label']} htmlFor="finish">
          Time to
        </label>
        <input className={styles['finish-field']} type="time" name="finish" id="finish" />
      </div>
    </form>
  );
};

export default AddEventForm;
