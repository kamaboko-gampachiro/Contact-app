import React, { useState } from "react";

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
    <li className="contactItem">
      {isEditing ? (
        <>
          <input
            className="editingInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="editingInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="editingInput"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            className="editingInput"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <button className="button saveButton" onClick={handleUpdate}>
            Save
          </button>
          <button
            className="button cancelButton"
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
          <div className="">
            <button
              className="button editButton"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="button deleteButton"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
            <button
              className="button whatsappButton"
              onClick={() => window.open(`https://wa.me/${mobile}`, "_blank")}
            >
              <i className="fab fa-whatsapp"></i>
            </button>
            <button
              className="button gmailButton"
              onClick={() => window.open(`mailto:${email}`, "_blank")}
            >
              <i className="far fa-envelope"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ContactItem;
