import React from "react";
import './Tarjeta.css'

function Tarjeta({ character }) {
  return (
    <div className="contenedor">
      
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species} - {character.status}</p>
      
    </div>
  );
}

export default Tarjeta