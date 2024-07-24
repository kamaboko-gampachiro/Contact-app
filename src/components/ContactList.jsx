import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, updateContact, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
