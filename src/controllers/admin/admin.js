const Apartment = require("../../models/apartment")
const Room = require("../../models/room")


exports.createPropertyPage = (req, res) => {
    res.render("pages/admin/create-property");
}

exports.cpanel = (req, res) => {
    res.render("pages/admin/index");
}

exports.createProperty = async (req, res) => {

    const {castBooleanCheck} = require("../../helpers/functions.js");
    
    let property = {
        //...req.body

        title: req.body.title,
        type: req.body.type,
        price: req.body.price,
        currency: req.body.currency,
        availability: req.body.availability,
        owner: req.body.owner,
        phone: req.body.phone,
        description: req.body.description,
        rule_extra: req.body.rule_extra,
        address: {
            street: req.body.street,
            city: req.body.city,
            district: req.body.borough
        },
        amenities : { 
                      fire_detector: castBooleanCheck(req.body.fire_detector),
                      air_condition: castBooleanCheck(req.body.air_condition),
                      heating: castBooleanCheck(req.body.heating),
                      wc_private: castBooleanCheck(req.body.wc_private),
                      wash_maschine: castBooleanCheck(req.body.wash_maschine),
                      tv: castBooleanCheck(req.body.tv),
                      wifi: castBooleanCheck(req.body.wifi),
                      dryer: castBooleanCheck(req.body.dryer),
                      swimming_pool: castBooleanCheck(req.body.swimming_pool),
                      balcony: castBooleanCheck(req.body.balcony),
                      terrace: castBooleanCheck(req.body.terrace),
                      exterior_views: castBooleanCheck(req.body.exterior_views),
                      interior_views: castBooleanCheck(req.body.nterior_views),
                      closet: castBooleanCheck(req.body.closet),
                      emergency_exit: castBooleanCheck(req.body.emergency_exit)
                    },

    }
    console.log(property);
    if (req.body.type === "Apartamento") {

        const apartment = new Apartment({
            ...property,
            rooms: {
                number: parseInt(req.body.rooms)
            }
        })

        await apartment.save();

        
        return res.json("Propiedad creada")
    }
    else if(req.body.type === "Hotel") {

        const hotelroom = new HotelRoom({
            ...property,
            beds: {
                number: parseInt(req.body.beds)
            }
        })

        await hotelroom.save();
        return res.json("Propiedad creada")
    }
}




exports.editProperty 









/* 
exports.getUsers = async (req, res) => {
    try {
        const employee = await Employee.find();
        
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
 */