import React, { useState } from 'react';

const Filtro = ({ onSearch }) => {

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');

    const handleSearch = () => {
        onSearch({ name, status, species });
    };

    return (
        <div className="search-bar">
            <input className='label'
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
             <select className='label' value={status} onChange={e => setStatus(e.target.value)}>
                <option value="">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <select className='label' value={species} onChange={e => setSpecies(e.target.value)}>
                <option value="">All</option>
                <option value="Human">Humano</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Animal">Animal</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="Poopybutthole">Poopybutthole</option>
                <option value="unknown">Unknown</option>
            </select>
            <button className='btn' onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default Filtro;