import Cards from '../models/Card.js';
import Plays from '../models/Play.js';
import Users from '../models/User.js';

const queryDb = () => {
  // given a deck id, get all the cards in that deck
  const getDeck = deckId => Cards.find({ deckId });

  // given a deck id and user id, get the distinct cards played for that deck
  const getDistinctCardsPlayed = (deckId, userId) => (
    Plays.distinct('cardId', { deckId, userId })
  );

  // get all plays of a single card from a deck and user
  const getCardPlays = (cardId, deckId, userId) => (
    Plays.find({ cardId, deckId, userId })
  );

  // get all usernames from database
  const getUserNames = (name) => (
    User.find({ name })
  );

  return ({
    getDeck,
    getDistinctCardsPlayed,
    getCardPlays,
    getUserNames,
  });
};

export default queryDb;
