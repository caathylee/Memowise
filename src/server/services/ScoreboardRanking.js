import queryDb from './QueryDb.js';

const getUserStats = (userId) => (
  queryDb().getDistinctCardsPlayed(deckId, userId)
    .then(distinctCards => (
      queryDb().getDeck(deckId).then(allCards => (
        `${(100 * Number(distinctCards.length)) / Number(allCards.length)}%`
      ))
    ))
);

export default getUserStats;
