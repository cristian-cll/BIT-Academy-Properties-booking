const Booking = require("../../models/booking")
const {PropertyModel} = require('../../models/property');
const User = require('../../models/user'); 


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
    
    console.log(booking);
    const bookingDone = await booking.save();
    return bookingDone;
    



    res.render("pages/user/profile");
}