import styles from './Contacts.module.scss';
import PropTypes from 'prop-types';

const ContactsElement = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.listItem}>
      {name}: {number}
      <button
        type="button"
        className={styles.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsElement;

ContactsElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
