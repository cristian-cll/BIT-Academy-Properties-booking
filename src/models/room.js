const mongoose = require("mongoose")
const {BaseSchema, PropertyModel} = require("./property")


const RoomSchema = new BaseSchema({
    
    type: { type: String,
        enum: ["Single", "Double", "Triple"] 
      },
    guests: Number,
    beds: Number,
    baths: Number,
    services: {
        wakeup: { type: Boolean, default: false },
        cleaning: { type: Boolean, default: false },
        restaurant: { type: Boolean, default: false },
        parking: { type: Boolean, default: false },
        laundry: { type: Boolean, default: false }
    }
}) 


module.exports = PropertyModel.discriminator("Hotel", RoomSchema)


