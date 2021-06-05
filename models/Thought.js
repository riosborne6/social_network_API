const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")

const noteSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Title is Required',
    minlength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: timeStamp => dateFormat(timeStamp)
  },

  username: {
    type: String,
    required: 'Username is Required'
  },

  reactions: 
    [reactionSchema]
});

noteSchema.virtual("reactionCount").get(function(){
  return this.reactions.length
})

const Note = model('Note', noteSchema);

module.exports = Note;
