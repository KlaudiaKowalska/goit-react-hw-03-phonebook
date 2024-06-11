// ContactList.jsx
import React from "react";
import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, filter, removeContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          removeContact={removeContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
