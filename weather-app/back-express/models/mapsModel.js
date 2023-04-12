const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  st: {
    type: Schema.Types.String,
  },
  ts: {
    type: Schema.Types.Date,
  },
});
