import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, addDeckHide, addDeckReveal } from '../actions';
import { Link } from 'react-router';


const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
  });

const mapDispatchToProps = (dispatch) => ({
    addDeck: name => dispatch(addDeck(name)),
    addDeckReveal: () => dispatch(addDeckReveal()),
    addDeckHide: () => dispatch(addDeckHide())

  });

const Sidebar = React.createClass({
  componentDidUpdate(){
    var foo = ReactDOM.findDOMNode(this.refs.add);
    if (foo) foo.focus();

  },

  render(){
    let props = this.props;
    return (
      <div className='sidebar'><h2> All of the Decks</h2>
      <ul className="nav nav-pills nav-stacked">{props.decks.map((deck, i) =>
        <li key ={i}>
          <Link role="presentation" className="active" to={`/deck/${deck.id}`}> {deck.name}</Link>
        </li>
      )}</ul>
    { props.addingDeck && <input ref='add' onKeyPress={this.createDeck} /> }
      </div>
    );
  },
  createDeck(event){
    if(event.which !== 13) return;

    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.addDeckHide();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
