const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const eventSchema = new Schema({
  title: String,
  description: String,
  category: {
    type: String,
    enum: ["food", "drinks", "concert", "exhibition", "museum", "nature", "sport", "markets", "other"]
  },
  picture: {
    path: String,
    default: String,
  },
  location: {
    street: String,
    houseNumber: Number,
    postalCode: Number,
    city: String
  },
  time: {
      startTime: String,
      duration: Number,
  },
  createdBy: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
},
{timestamps: true});

const Event = model("Event", eventSchema);

module.exports = Event;
