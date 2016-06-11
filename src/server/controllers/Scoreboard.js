import User from '../models/User';

import getUserStats from '../services/ScoreboardRanking.js';

const findAllUserStats = (req, res) => {
  User.find({}, {users: 1}).then((users) => {
    console.log("these are the names ", users);
    res
      .status(200)
      .type('json')
      .json(users)
  })
};

export default { findAllUserStats };
