const util = require('util');  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const BaseSchema = function() {  
    Schema.apply(this, arguments);

    this.add({

        title: { type: String, required: false },
        price: { type: Number, default: 0 },
        currency: { type: String, default: "EUR" },
        availability: { type: String, default: "Disponible" },
        booked: { type: Boolean, default: false },
        owner: String,
        phone: { type: Number },
        description: String,
        address: {
            street: String,
            city: String,
            district: String,
        },
        created_at: { type: Date, default: Date.now()},
        rules: String,
        amenities: {
            air_conditioner: { type: Boolean, default: false },
            heating: { type: Boolean, default: false },
            wc_private: { type: Boolean, default: false },
            wasch_maschine: { type: Boolean, default: false },
            tv: { type: Boolean, default: false },
            wifi: { type: Boolean, default: false },
            dryer: { type: Boolean, default: false },
            swimming_pool: { type: Boolean, default: false },
            balcony: { type: Boolean, default: false },
            terrace: { type: Boolean, default: false },
            exterior_views: { type: Boolean, default: false },
            interior_views: { type: Boolean, default: false },
            closet: { type: Boolean, default: false },
            emergency_exit: { type: Boolean, default: false },
            fire_detector: { type: Boolean, default: false }             
        },

    })
}

util.inherits(BaseSchema, Schema);

const PropertySchema = new BaseSchema();
const PropertyModel = mongoose.model("Property", PropertySchema)

module.exports = {
    BaseSchema,
    PropertyModel
}