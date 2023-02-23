import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  // --------------------HW-3. Saving to Local Storage-------------------------

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('savedContacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('savedContacts', JSON.stringify(contacts));
    }
  }
  // ---------------------------------------------------------------------------

  addContact = ({ name, number }) => {
    if (this.isDublicate(name)) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return filteredContacts;
  }

  isDublicate(name) {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(contact);
  }

  removeContact = elementId => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== elementId);
      return { contacts: newContacts };
    });
  };

  render() {
    const contacts = this.getFilteredContacts();

    return (
      <div className={css.root}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className={css.title}>Contacts</h2>
        <Filter handleChange={this.handleFilter} />
        <ContactList removeContact={this.removeContact} contacts={contacts} />
      </div>
    );
  }
}

export default App;
