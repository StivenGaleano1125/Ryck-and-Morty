import './App.css';
import React, { useState, useEffect} from 'react';
import Tarjeta from './componentes/Tarjeta.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 3;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
    
  }, [currentPage]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const charactersToShow = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <div className='Tarjeta-container'>
        {characters.length > 0 ? (
          charactersToShow.map((character) => (
            <Tarjeta key={character.id} character={character} />
          ))
        ) : (
          <p>No hay personajes para mostrar.</p>
        )}
      </div>
      <div className='pagination'>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={indexOfLastCharacter >= characters.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App
