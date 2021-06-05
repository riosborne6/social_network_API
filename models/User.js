const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: 'username is required'
    },

    email: {
      type: String,
      unique: true,
      required: 'email is Required',
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  }

);

userSchema.virtual("friendCount").get(function(){
  return this.friends.length
})

const User = model('User', userSchema);

module.exports = User;
