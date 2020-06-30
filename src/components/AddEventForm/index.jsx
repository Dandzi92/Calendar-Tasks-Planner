import React from 'react';
import { useFormik } from 'formik';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';

const AddEventForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      date: '',
      start: '',
      finish: '',
    },
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.title}>New Event</div>
      <div className={styles['group']}>
        <label className={styles['name-label']} htmlFor="name">
          Name
        </label>
        <input
          className={styles['name-field']}
          type="text"
          name="name"
          id="name"
          {...formik.getFieldProps('name')}
        />
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
          {...formik.getFieldProps('description')}
        />
      </div>
      <div className={styles['group']}>
        <label className={styles['date-label']} htmlFor="date">
          Date
        </label>
        <input
          className={styles['date-field']}
          type="date"
          name="date"
          id="date"
          {...formik.getFieldProps('date')}
        />
      </div>
      <div className={styles['group']}>
        <label className={styles['start-label']} htmlFor="start">
          Time from
        </label>
        <input
          className={styles['start-field']}
          type="time"
          name="start"
          id="start"
          {...formik.getFieldProps('start')}
        />
      </div>
      <div className={styles['group']}>
        <label className={styles['finish-label']} htmlFor="finish">
          Time to
        </label>
        <input
          className={styles['finish-field']}
          type="time"
          name="finish"
          id="finish"
          {...formik.getFieldProps('finish')}
        />
      </div>
      <button>Create</button>
    </form>
  );
};

export default AddEventForm;
