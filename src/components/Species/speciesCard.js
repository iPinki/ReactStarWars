import React from "react";

const SpeciesCard = ({name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language}) => {
  return(
    <div className='bg-yellow shadow-5 ts grow dib pa3 ma2 br3'>
      <h3>{name}</h3>
      <p>classification: {classification}</p>
      <p>designation: {designation}</p>
      <p>average height: {average_height}</p>
      <p>skin colors: {skin_colors}</p>
      <p>hair colors: {hair_colors}</p>
      <p>eye colors: {eye_colors}</p>
      <p>average lifespan: {average_lifespan}</p>
      <p>language: {language}</p>
    </div>
  );
};

export default SpeciesCard;