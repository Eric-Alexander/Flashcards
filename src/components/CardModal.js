import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

const CardModal = React.createClass({
  componentDidUpdate(){
    ReactDOM.findDOMNode(this.refs.front).focus();
  },
  render(){
    let {card, onDelete} = this.props;

    return(
      <div className='myModal' class="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className = "modal-content">
            <div className = "modal-header">
              <h1 class="modal-title"> { onDelete ? 'Edit' : 'New' } Card </h1>
            </div>
            <div className = "modal-body">
              <label> Card Front: </label>
              <textarea className="form-control" ref='front' defaultValue = {card.front}></textarea>
              <label> Card Back: </label>
              <textarea className="form-control" ref='back' defaultValue = {card.back}></textarea>
            </div>
            <div className = "modal-footer">
              <button
                className="btn btn-success"
                data-dismiss="modal"
                onClick = {this.onSave}> Save Card </button>

              <Link
                className="btn btn-danger"
                data-dismiss="modal"
                to ={`/deck/${card.deckId}`}> Cancel </Link>
                  { onDelete ?
                    <button
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={this.onDelete}> Delete Card </button> : null}
              </div>
            </div>
      </div>
    </div>
    );
  },
  onSave(event){
    var front = ReactDOM.findDOMNode(this.refs.front);
    var back = ReactDOM.findDOMNode(this.refs.back);

    this.props.onSave(Object.assign({}, this.props.card, {
      front: front.value,
      back: back.value
    }));

    browserHistory.push(`/deck/${this.props.card.deckId}`);
  },
  onDelete(e){
    this.props.onDelete(this.props.card.id);
    browserHistory.push(`/deck/${this.props.card.deckId}`);
  }
});

export default CardModal;
