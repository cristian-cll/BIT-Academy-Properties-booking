const {Booking, PropertyModel} = require("../../models/index")

// Renderiza la pagina para reservar
exports.renderBookingPage = async (req, res,) => {
    
    //const userId = req.user._id;
    const propertyId = req.query.id;
    //Buscamos el id de la propiedad

    //HACER!!!!!!!!!!!!!! SI EXISTE LAS FECHAS HACER ESTO
    try{

        const property = await PropertyModel.findById(propertyId).lean()

        res.render("pages/booking/property-detail", {
                property: property,
                date_in : req.query.date_in,
                date_out : req.query.date_out
        })
    } catch (error) {
        console.log(error);
    }    
}

exports.createBooking = async (req, res,) => {

    const{date_in, date_out, property_id} = req.body;

    const booking = new Booking({
    
        checkIn: date_in,
        checkOut: date_out,
        user: req.user._id,
        property: property_id,
    })
    
    const bookingDone = await booking.save();
    res.redirect("/user/profile");
}

exports.deleteBooking = async (req, res,) => {

    const{id} = req.params;

    const bookingFounded = await Booking.findOneAndRemove({_id: id});

    res.redirect("/user/profile");
}