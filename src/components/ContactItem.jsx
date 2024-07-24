import React, { useState } from "react";
import styles from "./ContactItem.module.css";

function ContactItem({ contact, updateContact, deleteContact }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [mobile, setMobile] = useState(contact.mobile);
  const [department, setDepartment] = useState(contact.department);

  const handleUpdate = () => {
    updateContact({ ...contact, name, email, mobile, department });
    setIsEditing(false);
  };

  return (
    <li className={styles.contactItem}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.editingInput}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.editingInput}
            placeholder="Email"
          />
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className={styles.editingInput}
            placeholder="Mobile"
          />
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={styles.editingInput}
            placeholder="Department"
          />
          <button className={styles.saveButton} onClick={handleUpdate}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>
            <strong>Name:</strong> {contact.name}
          </span>
          <span>
            <strong>Email:</strong> {contact.email}
          </span>
          <span>
            <strong>Mobile:</strong> {contact.mobile}
          </span>
          <span>
            <strong>Department:</strong> {contact.department}
          </span>
          <button
            className={styles.saveButton}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default ContactItem;
