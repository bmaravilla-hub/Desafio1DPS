import React from 'react';

const Contact = React.memo(({ contact, onDelete, onToggleFavorite }) => {
  return (
    <div style={styles.contactContainer}>
      <div style={styles.contactInfo}>
        <p style={styles.contactName}>
          {contact.name} {contact.lastName}
        </p>
        <div style={styles.phoneContainer}>
          <p style={styles.contactPhone}>
            {contact.phone ? contact.phone : 'Sin teléfono'}
          </p>
        </div>
      </div>
      <div style={styles.contactActions}>
        {/* Botón para marcar/desmarcar como favorito */}
        <button
          style={styles.buttonWithIcon}
          onClick={() => onToggleFavorite(contact.id)}
        >
          <i
            className={contact.isFavorite ? 'fas fa-star' : 'far fa-star'} 
            style={{ ...styles.icon, color: contact.isFavorite ? '#FFD700' : '#000' }} 
          ></i>
          <span style={styles.buttonText}>
            {contact.isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </span>
        </button>

        {/* Botón para eliminar el contacto */}
        <button
          style={styles.buttonWithIcon}
          onClick={() => onDelete(contact.id)}
        >
          <i
            className="fas fa-trash" 
            style={{ ...styles.icon, color: '#E91E63' }} 
          ></i>
          <span style={{ ...styles.buttonText, color: '#E91E63' }}>Eliminar</span>
        </button>
      </div>
    </div>
  );
});

const styles = {
  contactContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    margin: '8px 0',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contactInfo: {
    marginBottom: 12,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    margin: 0,
  },
  phoneContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 4,
  },
  contactPhone: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
    margin: 0,
  },
  contactActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1px solid #EEE',
    paddingTop: 12,
  },
  buttonWithIcon: {
    marginLeft: 16,
    padding: 8,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#000',
  },
  icon: {
    fontSize: 16, 
  },
};

export default Contact;

