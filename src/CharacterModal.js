import React from 'react';

const CharacterModal = ({ character, onClose }) => {
    const { name, status, species, image, gender, origin, episode } = character;

    return (
        <div className="modal">
            <div className="modal-content" 
            >
                <span className="close" onClick={onClose}>&times;</span>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{status}</p>
                <p>{species}</p>
                <p>{gender}</p>
                <p>Origin: {origin.name}</p>
                <p>Episodes: {episode.length}</p>
            </div>
        </div>
    );
};

export default CharacterModal;