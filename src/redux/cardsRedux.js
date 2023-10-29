import shortid from'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards,searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title,searchString));
export const getFavoriteCards = (state) => state.cards.filter(card=>card.isFavorite);

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const ADD_FAVORITE = createActionName('ADD_FAVORITE');

//actions creators
export const addCard = payload =>({type:ADD_CARD, payload});
export const addFavorite = payload => ({type:ADD_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case ADD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }

  export default cardsReducer;