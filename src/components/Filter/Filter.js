import styles from './Filter.module.scss';
import { v4 as uuidv4 } from 'uuid';

const filterId = uuidv4();

const Filter = ({ value, onChange }) => (
  <label htmlFor={filterId}>
    <p className={styles.subtitle}>Find contacts by name</p>
    <input
      id={filterId}
      type="text"
      name="filter"
      value={value}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      autoComplete="off"
      required
      onChange={onChange}
    />
  </label>
);

export default Filter;
