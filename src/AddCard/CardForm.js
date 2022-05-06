import React, { useState, useEffect } from "react";
import { useHistory, useParams  } from 'react-router-dom'

function CardForm({ card, handleSubmit, setCard }) {
  const { deckId, cardId} = useParams();

  useEffect(() => {
    setCard({
      front: card.front,
      back: card.back,
      id: cardId,
      deckId: deckId
    });
  }, [card.front, card.back, cardId, deckId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Front">
        Front
        <br />
        <textarea
            id='front'
            name='front'
            onChange={handleChange}
            value={card.front}
            rows='5'
            required
            />
      </label>
      <br />
      <label htmlFor="back">
        Back
        <br />
          <textarea
            id='back'
            name='back'
            onChange={handleChange}
            value={card.back}
            rows='5'
            required
            />
      </label>
      <br />
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  )
}

export default CardForm