const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  avatar: {
    path: String,
    default: String,
  },
  favourites: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }],
  doneActivities: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }],
  createdActivites: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }]
},
{timestamps: true});

const User = model("User", userSchema);

module.exports = User;
