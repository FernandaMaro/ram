import React from "react";

const CharacterCard = ({ character, onClick }) => {
  const { name, status, species, image } = character;

  const getBackgroundColor = (species) => {
    switch (species) {
      case "Human":
        return "#06ADBF";
      case "Alien":
        return "#82BF45";
      case "Humanoid":
        return "#F28322";
      case "Poopybutthole":
        return "#F2B199";
        case "Mythological Creature":
        return "#328C40";
        case "Animal":
        return "#AA71A7";
      default:
        return "#C7D941";
    }
  };

  return (
    <section>
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
    </section>
  );
};

export default CharacterCard;
