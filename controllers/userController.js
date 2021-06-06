const { Thought, User } = require("../models");

const userController = {
  // get all users
  getAllusers(req, res) {
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one pizza by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .then(dbUserData => {
        // If no pizza is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // Post a new User
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // update pizza by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete pizza
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'You have successfully deleted this dude!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  createFriend({ params }, res) {
    User.findOne({ _id: params.friendsId })
      .then(dbFriendData => {
      if (!dbFriendData) {
        res.status(404).json({ message: 'No Imaginary Friends allowed' });
        return;
      }
      User.findOneAndUpdate({ _id: params.userId },
        { $push: { friends: params.friendsId } })
      .then(dbUserData => {
        (res.json(dbUserData))
        })
  })
      .catch(err => res.status(400).json(err));
},

  deleteFriend({ params }, res) {
    User.findOneAndUpdate({ _id: params.userId },
      { $pull: { friends: params.friendsId } })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  }
}

module.exports = userController