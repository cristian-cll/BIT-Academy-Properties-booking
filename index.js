require("./src/app")

const Apartment = require('./src/models/apartment');  
const Room = require('./src/models/room');  

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

newApartment()
    .then(property => console.log(property))
    .catch(err => console.log(err))



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

newHotel()
    .then(property => console.log(property))
    .catch(err => console.log(err))


    