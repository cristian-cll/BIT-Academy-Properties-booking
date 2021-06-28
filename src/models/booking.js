const {Schema, model} = require("mongoose");


const bookingSchema = new Schema({
    checkIn: {
      type: Date,
      required: true
    },
    checkOut: {
      type: Date,
      required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    property: { type: Schema.Types.ObjectId, ref: 'Property' },
    created_at: { type: Date, default: Date.now()},
  });

  //Asociamos la collección "Booking" con el modelo "bookingSchema"
  module.exports = model("Booking", bookingSchema);

  