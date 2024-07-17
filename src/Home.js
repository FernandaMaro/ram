import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                let allCharacters = [];
                for (let i = 1; i <= 3; i++) {
                    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
                    allCharacters = [...allCharacters, ...response.data.results];
                }
                setCharacters(allCharacters);
                setLoading(false);
            } catch (error) {
                setError('Error al cargar los personajes');
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Personajes de Rick and Morty</h2>
            <div className="character-grid">
                {characters.map(character => (
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
