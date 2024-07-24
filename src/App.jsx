import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css"; // Import the CSS file for styling

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState(""); // State to store the search query

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Filter contacts based on query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() => setQuery(searchTerm.trim())} // Update query state on button click
          className="search-button"
        >
          Search
        </button>
      </div>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={filteredContacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
