const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  place_name: {
    type: String,
    maxlength: 50,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
});

const Place = mongoose.model("Place", placeSchema);

module.exports = { User };
