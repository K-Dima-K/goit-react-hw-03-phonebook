import PropTypes from 'prop-types';

import css from './Filter.module.css';

const Filter = ({ handleChange }) => {
  return (
    <div className={css.formGroup}>
      <label className={css.label}>Find contacts by name</label>
      <input
        name="filter"
        onChange={handleChange}
        className={css.input}
        placeholder="enter name"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
