require("./src/app")
const {Schema} = require("mongoose");
const Apartment = require('./src/models/apartment');  
const Room = require('./src/models/room');  
const Booking = require('./src/models/booking');
const User = require('./src/models/user'); 
const {PropertyModel} = require('./src/models/property');  

async function newApartment(){
    const property = new Apartment({

        title: "Super Villa",
        price: 35,
        currency: "EUR",
        availability: "Disponible",
        booked: false,
        owner: "Manolo",
        phone: 635255868,
        description: "Bonito Lugar",
        address: {
            street: "Sepulveda",
            city: "Barcelona",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            air_conditioner:true,
            heating:true,
            wc_private:true,
            wasch_maschine:true,
            tv:true,
            wifi:true,
            dryer:true,
            swimming_pool: false,
            balcony:true,
            terrace:true,
            exterior_views:true,
            interior_views:true,
            closet:true,
            emergency_exit:true,
            fire_detector:true             
        },
        numberRooms: 4,
        numberBaths: 1,

    })
    
    const apartment = await property.save();
    return apartment;
}

/* newApartment()
    .then(property => console.log(property))
    .catch(err => console.log(err))

 */

async function newHotel(){
    const property = new Room({

        title: "Waikiki",
        price: 35,
        currency: "EUR",
        availability: "Disponible",
        booked: false,
        owner: "Manolo",
        phone: 635255868,
        description: "Bonito Lugar",
        address: {
            street: "Sepulveda",
            city: "Madrid",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            air_conditioner:true,
            heating:true,
            wc_private:true,
            wasch_maschine:true,
            tv:true,
            wifi:true,
            dryer:true,
            swimming_pool: false,
            balcony:true,
            terrace:true,
            exterior_views:true,
            interior_views:true,
            closet:true,
            emergency_exit:true,
            fire_detector:true             
        },
        typeRoom: "Single",
        guests: 5,
        beds: 2,
        baths: 2,
        services: {
            wakeup: true,
            cleaning: true,
            restaurant: false,
            parking: true,
            laundry: true
        }

    })
    
    const apartment = await property.save();

    return apartment;
}

/* newHotel()

    .then(property => console.log(property))
    .catch(err => console.log(err))
 */


async function newUser(){

    const user = new User({
        username: "admin",
        password: 1,
        role: "Admin"
    })

    const pepe = await user.save();

    return pepe;

}


/* newUser()
    .then(user => console.log(user))
    .catch(err => console.log(err)) 
 */

async function newBooking(){

    //Buscamos el id del usuario
    const user = await User.findById("60ce13206b50591ff4f772d6")
    //Buscamos el id de la propiedad
    const property = await PropertyModel.findById("60cb87b8d38564626494fa27")
        

    const booking = new Booking({
    
        checkIn: "2021-06-15",
        checkOut: "2021-06-20",
        user: user._id,
        property: property._id,
     })
        
    const bookingDone = await booking.save();
    return bookingDone;
    }
    
/*     newBooking()
    
        .then(booking => console.log(booking))
        .catch(err => console.log(err)) */
        
async function showBooking(){

    const booking = await Booking.findById("60ce13206b50591ff4f772d6").populate("user").populate("property")
    return booking;

}

/* showBooking()
    .then(booking => console.log("booking", booking))
    .catch(err => console.log(err))
 */

async function showBookingUser(){

    const booking = await Booking.find({user : "60ce13206b50591ff4f772d6"}).populate("property")
    return booking;
    
}
    
showBookingUser()
    .then(booking => console.log("booking User", booking))
    .catch(err => console.log(err)) 


    