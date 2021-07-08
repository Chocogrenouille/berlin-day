const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  title: String,
  description: String,
  category: {
    type: [String],
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
  specificDate: String,
  frequency: {
    weekday: {
      type: [String],
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    period: {
      type: String,
      enum: ["weekly", "monthly"]
    },
    occurence: Number
  },
  createdBy: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
},
{timestamps: true});

const Event = model("Event", eventSchema);

module.exports = Event;
