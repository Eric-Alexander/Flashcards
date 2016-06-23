import React from 'react';
import { Link } from 'react-router';

const Card = ({ card }) => {
  return(
    <div>
      <div>
        <p> {card.front} </p>
        <Link className= "btn btn-info btn-sm" to={`/deck/${card.deckId}/edit/${card.id}`}> Edit </Link>
      </div>
    </div>
  );
  
};

export default Card;
