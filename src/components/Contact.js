import styled from "styled-components";

const ContactCard = styled.div`
  border: 2px solid ${(props) => (props.favorito ? "#ff69b4" : "#ccc")};
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  background: ${(props) => (props.favorito ? "#ffe4e1" : "#f9f9f9")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Contact = ({ contacto, toggleFavorito, eliminarContacto }) => {
  return (
    <ContactCard favorito={contacto.favorito}>
      <div>
        <h3>
          {contacto.nombre} {contacto.apellido}
        </h3>
        <p>📞 {contacto.telefono}</p>
      </div>
      <div>
        <button onClick={() => toggleFavorito(contacto.id)}>
          {contacto.favorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
        </button>
        <button onClick={() => eliminarContacto(contacto.id)}>❌ Eliminar</button>
      </div>
    </ContactCard>
  );
};

export default Contact;
