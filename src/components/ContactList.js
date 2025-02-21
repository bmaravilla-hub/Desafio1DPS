import { useState, useEffect } from "react";
import Contact from "./Contact";
import styled from "styled-components";
import contactosData from "../datos/contacts.json";

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
`;

const ContactList = () => {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    setContactos(contactosData);
  }, []);

  const agregarContacto = (nombre, apellido, telefono) => {
    const nuevoContacto = {
      id: Date.now(),
      nombre,
      apellido,
      telefono,
      favorito: false,
    };
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (id) => {
    setContactos(contactos.filter((contacto) => contacto.id !== id));
  };

  const toggleFavorito = (id) => {
    setContactos(
      contactos.map((contacto) =>
        contacto.id === id ? { ...contacto, favorito: !contacto.favorito } : contacto
      )
    );
  };

  return (
    <Container>
      <h2>Lista de Contactos</h2>
      <button onClick={() => agregarContacto("Nuevo", "Contacto", "00000000")}>➕ Agregar Contacto</button>
      {contactos
        .sort((a, b) => b.favorito - a.favorito)
        .map((contacto) => (
          <Contact
            key={contacto.id}
            contacto={contacto}
            toggleFavorito={toggleFavorito}
            eliminarContacto={eliminarContacto}
          />
        ))}
    </Container>
  );
};

export default ContactList;
