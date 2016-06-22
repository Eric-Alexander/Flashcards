export const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
    let newCard = Object.assign({}, action.data, {
      score: 1,
      id: +new Date
    });
    return state.concat([newCard]);

    default:
    return state || [];
  }
};

export const decks = (state, action) => {
  switch (action.type){
    case 'ADD_DECK':
      let newDeck = {name: action.data, id: +new Date };
      return state.concat([newDeck]);
    default:
    return state || [];
  }
};

export const addingDeck = (state, action) =>{
  switch (action.type){
    case 'ADD_DECK_REVEAL': return true;
    case 'ADD_DECK_HIDE': return false;
    default: return !!state;
  }

};
