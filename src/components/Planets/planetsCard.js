import React from "react";

const PlanetsCard = ({name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population}) => {
  return(
    <div className='bg-yellow shadow-5 tc grow dib pa3 ma2 br3'>
      <h3>{name}</h3>
      <p>rotation period: {rotation_period}</p>
      <p>orbital period: {orbital_period}</p>
      <p>diameter: {diameter}</p>
      <p>climate: {climate}</p>
      <p>gravity: {gravity}</p>
      <p>terrain: {terrain}</p>
      <p>population: {population}</p>
    </div>
  );
};

export default PlanetsCard;