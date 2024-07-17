import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import CharacterModal from "./CharacterModal";
import Filtro from "./Filtro";
import logo from './img/Rick-And-Morty-Logo.png';

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

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        for (let i = 1; i <= 3; i++) {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${i}`
          );
          allCharacters = [...allCharacters, ...response.data.results];
        }
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar los personajes");
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
  }, [searchCriteria, characters]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div >
      <div className="container">
      <img id="logo" src={logo} alt="rick and morty logo"/>
        <h1>Rick and Morty Wiki</h1>
        <Filtro onSearch={setSearchCriteria} />
      </div>
      <div className="character-grid">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
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
