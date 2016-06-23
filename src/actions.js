

export const addDeck = name => ({ type: 'ADD_DECK', data: name });
export const addDeckReveal = () => ({ type: 'ADD_DECK_REVEAL' });
export const addDeckHide = () => ({ type: 'ADD_DECK_HIDE' });

export const addCard = card => ({ type: 'ADD_CARD', data: card });
export const updateCard = card => ({ type:'UPDATE_CARD', data: card });
export const deleteCard = cardId => ({ type:'DELETE_CARD', data: cardId });

export const filterCards = query => ({ type: 'FILTER_CARDS', data: query });
export const showBack = back => ({ type: 'SHOW_BACK', data: back });
