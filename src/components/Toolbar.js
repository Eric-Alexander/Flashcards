import React from 'react';
import { addDeckReveal } from '../actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  addDeckReveal: () => dispatch(addDeckReveal())
});

const Toolbar = ({ deckId, addDeckReveal }) => {
  let deckTools = deckId ? (<div>
    <Link to={`/deck/${deckId}/new`}> <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">+ New Card</button></Link>
    <Link className="btn btn-success" to={`/deck/${deckId}/study`}> Study Deck </Link>
  </div>) : null;
  return(
    <nav>
      <div className='navbar navbar-default'>
        <div className="container-fluid">
        <button
          className= "btn btn-primary"
          onClick = {addDeckReveal}> + New Deck </button>

        </div>
        {deckTools}
      </div>
    </nav>
  );
};

export default connect(null, mapDispatchToProps)(Toolbar);
