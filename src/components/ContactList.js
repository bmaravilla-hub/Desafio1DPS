import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete, onToggleFavorite }) => {
  return (
    <div style={styles.container}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id.toString()}
          contact={contact}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    flex: '1', 
    backgroundColor: '#F5F5F5',
    padding: 16, 
  },
};

export default ContactList;