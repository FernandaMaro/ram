import React from 'react';

const CharacterCard = ({ character, onClick }) => {
    const { name, status, species, image } = character;

    const getBackgroundColor = (species) => {
        switch (species) {
            case 'Human':
                return 'lightblue';
            case 'Alien':
                return 'lightgreen';
            default:
                return 'lightgray';
        }
    };

    return (
        <div
            className="character-card"
            onClick={onClick}
            style={{ backgroundColor: getBackgroundColor(species) }}
        >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{species}</p>
        </div>
    );
};

export default CharacterCard;
