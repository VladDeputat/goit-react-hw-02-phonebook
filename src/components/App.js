import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactForm from './Form/ContactForm';
import styles from './App.module.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.some(contact => contact.name === data.name)) {
      alert(data.name + ` is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: uuidv4(), name: data.name, number: data.number },
        ],
      }));
    }
  };

  onFilterChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredNumbers = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />

        <Contacts
          contacts={filteredNumbers}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
