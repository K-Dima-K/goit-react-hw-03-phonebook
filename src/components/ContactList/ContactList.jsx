import PropTypes from 'prop-types';

import ListItem from './ListItem/ListItem';

import css from './ContactList.module.css';

const ContactList = ({ removeContact, contacts }) => {
  const items = contacts.map(({ id, name, number }) => (
    <ListItem
      key={id}
      name={name}
      number={number}
      removeContact={removeContact}
      elementId={id}
    />
  ));

  return <ul className={css.contacts}>{items}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
