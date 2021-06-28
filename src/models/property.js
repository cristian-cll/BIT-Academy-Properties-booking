const util = require('util');  
const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  

const BaseSchema = function() {  
    Schema.apply(this, arguments);

    this.add({

        title: { type: String, required: false },
        price: { type: Number, default: 0 },
        currency: { type: String, default: "EUR" },
        capacity: { type: Number, require: true},
        availability: { type: String, enum: ["Disponible", "No disponible"]},
        capacity: {type: Number, default: 1},
        owner: String,
        phone: { type: Number },
        description: String,
        address: {
            street: String,
            city: String,
            district: String,
            latitude: String,
            longitude: String
        },
        area:{ type: Number},
        created_at: { type: Date, default: Date.now()},
        amenities: {
            air_conditioner: { type: Boolean, default: false },
            heating: { type: Boolean, default: false },
            wc_private: { type: Boolean, default: false },
            wash_machine: { type: Boolean, default: false },
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
            fire_detector: { type: Boolean, default: false },
            accessibility:  { type: Boolean, default: false },
            kitchen: { type: Boolean, default: false }            
        },
        rules:{
            smoking: { type: Boolean, default: false },
            pets: { type: Boolean, default: false },
            noise: { type: Boolean, default: false },
            invite: { type: Boolean, default: false },
        },
        //rule_extra: String,

       main_photo: {
           url: {type: String, require: true},
           description: {type: String, require: true}
       },
       photos:[{
           url: {type: String, require: true},
           description: {type: String, require: true}
       }],
       video: String,
       created_at: { type: Date, default: Date.now()},
    })
}

util.inherits(BaseSchema, Schema);

const PropertySchema = new BaseSchema();
const PropertyModel = mongoose.model("Property", PropertySchema)

module.exports = {
    BaseSchema,
    PropertyModel
}