import ContactsElement from './ContactsElement';
import styles from './Contacts.module.scss';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={styles.contactsBox}>
      <ul>
        {contacts.map(contact => (
          <ContactsElement
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
