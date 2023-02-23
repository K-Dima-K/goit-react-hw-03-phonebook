import PropTypes from 'prop-types';

import css from './ListItem.module.css';

const ListItem = ({ removeContact, name, number, elementId }) => {
  return (
    <li>
      <span className={css.text}>
        {name}: {number}
      </span>
      <button
        className={css.removeBtn}
        onClick={() => removeContact(elementId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  removeContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  elementId: PropTypes.string.isRequired,
};
