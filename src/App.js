import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import contactsData from './datos/contacts.json';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(''); // mensajes de error

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const addContact = () => {
    // Validar que todos los campos estén llenos
    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar que el numero de teléfono tenga exactamente 8 dígitos
    if (phone.length !== 8) {
      setError('El teléfono debe tener exactamente 8 dígitos.');
      return;
    }

    // agregar el contacto
    const newContact = {
      id: Date.now(),
      name,
      lastName,
      phone,
      isFavorite: false,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setLastName('');
    setPhone('');
    setShowForm(false);
    setError(''); 
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const toggleFavorite = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
    );
    setContacts(updatedContacts.sort((a, b) => b.isFavorite - a.isFavorite));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="titleContainer">
          <h1 className="title">Administrador de Contactos</h1>
        </div>

        <button className="addButton" onClick={() => setShowForm(!showForm)}>
          + Agregar Contacto
        </button>
      </div>

      {showForm && (
        <div className="form">
          <h2 className="formTitle">Nuevo Contacto</h2>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <input
            className="input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => {
              const numericText = e.target.value.replace(/[^0-9]/g, '').slice(0, 8);
              setPhone(numericText);
            }}
            maxLength={8}
          />

          <button className="addButtonForm" onClick={addContact}>
            Agregar
          </button>
        </div>
      )}

      <h2 className="sectionTitle">Lista de Contactos</h2>
      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;