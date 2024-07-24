import React, { useState } from "react";
import "./ContactForm.css"; // Assuming you add styling specific to this component

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      email,
      mobile,
      department,
    };
    addContact(newContact);
    setName("");
    setEmail("");
    setMobile("");
    setDepartment("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile"
        required
      />
      <input
        type="text"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
