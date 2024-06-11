import React from "react";
import styles from "./ContactListItem.module.scss";

const ContactListItem = ({ contact, removeContact }) => {
  const handleRemoveClick = () => {
    removeContact(contact.id);
  };

  return (
    <li>
      {contact.name}: {contact.number}
      <button onClick={handleRemoveClick} className={styles.buttonDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
