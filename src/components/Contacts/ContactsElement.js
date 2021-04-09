import styles from './Contacts.module.scss';

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
