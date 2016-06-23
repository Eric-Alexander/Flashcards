

export const addDeck = name => ({ type: 'ADD_DECK', data: name });
export const addDeckReveal = () => ({ type: 'ADD_DECK_REVEAL' });
export const addDeckHide = () => ({ type: 'ADD_DECK_HIDE' });

export const addCard = card => ({ type: 'ADD_CARD', data: card });
