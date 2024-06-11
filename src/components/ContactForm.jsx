import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ contacts, addContact }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === state.name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${state.name} is already in the contacts.`);
      return;
    }

    if (state.name.trim() === "" || state.number.trim() === "") return;
    const newContact = {
      id: nanoid(),
      name: state.name.trim(),
      number: state.number.trim(),
    };
    addContact(newContact);
    setState({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.paragraphForm}>Name</p>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я '-]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p className={styles.paragraphForm}>Number</p>
      <input
        type="tel"
        name="number"
        value={state.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Phone Number"
        required
      />
      <button type="submit" className={styles.buttonForm}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
