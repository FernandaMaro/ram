import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";
import Filtro from "./Filtro";
import logo from './img/Rick-And-Morty-Logo.png';
import Spinner from "./spinner";
import Paginacion from "./Paginacion";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    name: "",
    status: "",
    species: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        for (let i = 1; i <= 10; i++) {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${i}`
          );
          allCharacters = [...allCharacters, ...response.data.results];
        }
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters);
        setLoading(false);
      } catch (error) {
        setError("Error at loading characters");
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const { name, status, species } = searchCriteria;
    const filtered = characters.filter(
      (character) =>
        character.name.toLowerCase().includes(name.toLowerCase()) &&
        character.status.toLowerCase().includes(status.toLowerCase()) &&
        character.species.toLowerCase().includes(species.toLowerCase())
    );
    setFilteredCharacters(filtered);
    setCurrentPage(1); 
  }, [searchCriteria, characters]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const isFiltering = searchCriteria.name || searchCriteria.status || searchCriteria.species;

  const displayedCharacters = isFiltering ? filteredCharacters : filteredCharacters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="container">
        <img id="logo" src={logo} alt="rick and morty logo"/>
        <h1 id="wiki">Wiki</h1>
        <Filtro onSearch={setSearchCriteria} />
      </div>
      <div className="character-grid">
        {displayedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      {!isFiltering && (
        <Paginacion
          totalItems={filteredCharacters.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default Home;
