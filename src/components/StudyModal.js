import React from 'react';
import { Link } from 'react-router';
import { updateCard, showBack } from '../actions';
import { connect } from 'react-redux';

const MS_IN_DAY = 86400000;

const mapStateToProps = ({ cards, showBack}, { params: { deckId } }) => ({
  showBack,
  deckId,
  card: cards.filter(card => card.deckId === deckId &&
    (!card.lastStudiedOn || (new Date - card.lastStudiedOn) / MS_IN_DAY >= card.score))[0]
});

const mapDispatchToProps = dispatch => ({
  onStudied: (cardId, score) => {
    var now = new Date();
    now.setHours(0,0,0,0);
    dispatch(updateCard({ id: cardId, score, lastStudiedOn: +now }));
    dispatch(showBack());
  },
  onFlip: () => dispatch(showBack(true))
});

const StudyModal = ({ card, showBack, showFront, onFlip, onStudied, deckId }) => {
  let body = (
    <div>
      <p> You haven't any cards to study in this deck. </p>
    </div>
  );
  if (card) {
    body = (
      <div>
        <div className= { showBack ? 'front hide' : 'front'}>
            <div>
              <p>{ card.front }</p>
            </div>
            <button
              onClick={onFlip}> Flip </button>
        </div>

        <div className= { showBack ? 'back' : 'back hide'}>
          <div>
            <p>{ card.back }</p>
          </div>
            <p>How did you do?</p>
            <p>
              <button onClick={e => onStudied(card.id, Math.max(card.score - 1, 1) )}> Bad </button>
              <button onClick={e => onStudied(card.id, card.score)}> Fair </button>
              <button onClick={e => onStudied(card.id, Math.min(card.score + 1, 3) )}> Good </button>
            </p>

        </div>
      </div>
    )
  }
  return(
    <div>
      <Link className="btn btn-primary" to={`/deck/${deckId}`}> x </Link>
      {body}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StudyModal);
