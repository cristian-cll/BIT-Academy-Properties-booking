const {Apartment, Room, PropertyModel, Booking} = require("../../models/index");
const Pselect = require('pselect.js');
const {castBooleanCheck} = require("../../helpers/castBooleanCheck.js");

const findCity = (id) => {
    if(/\d/.test(id)){
        const result = Pselect.provincesData.find( province => province.id == id);
        return result.nm;
    }else{
    return id;
    }
}

const findDistrict = (id) => {
    if(/\d/.test(id)){
        const result = Pselect.municipesData.find( municipe => municipe.id == id);
        return result.nm;
    }else{
        return id;
        }
}


exports.renderNewPropertyPage = (req, res) => {
    res.render("pages/admin/create-property");
}

exports.cpanel = async (req, res) => {

    const noAvailableProperties = await PropertyModel.find({availability: "No disponible"}).lean();
    const bookings = await Booking.find().populate("user");
    const properties = await PropertyModel.find();
    const hotels = await PropertyModel.find({__t: "Hotel"});
    const apartments = await PropertyModel.find({__t: "Apartamento"});

   console.log(bookings);

    res.render("pages/admin/index", {
        noAvailableProperties,
        bookings,
        properties,
        hotels,
        apartments
    });
}

exports.createProperty = async (req, res) => {

    console.log(req.body);
    const property = {
        
        title: req.body.title,
        price: req.body.price,
        currency: req.body.currency,
        availability: req.body.availability,
        owner: req.body.owner,
        phone: req.body.phone,
        capacity: req.body.capacity,
        description: req.body.description,
        area: req.body.area,
        address: {
            street: req.body.street,
            city: findCity(req.body.city),
            district: findDistrict(req.body.district),
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        amenities: {
            fire_detector: castBooleanCheck(req.body.fire_detector),
            air_conditioner: castBooleanCheck(req.body.air_conditioner),
            heating: castBooleanCheck(req.body.heating),
            wc_private: castBooleanCheck(req.body.wc_private),
            wash_machine: castBooleanCheck(req.body.wash_machine),
            tv: castBooleanCheck(req.body.tv),
            wifi: castBooleanCheck(req.body.wifi),
            dryer: castBooleanCheck(req.body.dryer),
            swimming_pool: castBooleanCheck(req.body.swimming_pool),
            balcony: castBooleanCheck(req.body.balcony),
            terrace: castBooleanCheck(req.body.terrace),
            exterior_views: castBooleanCheck(req.body.exterior_views),
            interior_views: castBooleanCheck(req.body.nterior_views),
            closet: castBooleanCheck(req.body.closet),
            emergency_exit: castBooleanCheck(req.body.emergency_exit),
            accessibility: castBooleanCheck(req.body.accessibility),
            kitchen: castBooleanCheck(req.body.kitchen)
        },
        rules: {
            smoking: castBooleanCheck(req.body.smoking),
            pets: castBooleanCheck(req.body.pets),
            noise: castBooleanCheck(req.body.noise),
            invite: castBooleanCheck(req.body.invite)
        },
        main_photo: {
            url: req.body.main_photo,
            description: req.body.description_main_photo
        },
        photos:[{
            url: req.body.photo1,
            description: req.body.description_photo1
        },{
            url: req.body.photo2,
            description: req.body.description_photo2
        },{
            url: req.body.photo3,
            description: req.body.description_photo3
        }],
        video: req.body.video
    }


    if (req.body.type === "Apartamento") {

        const apartment = new Apartment({
            ...property,
            numberRooms : req.body.rooms,
            numberBaths: req.body.baths,
        })

        await apartment.save();

        res.redirect("/admin")
    }
    else if(req.body.type === "Hotel") {

        const hotelroom = new Room({
            ...property,
            type: req.body.room_type,
            beds: req.body.beds,
            services: {
                wakeup: castBooleanCheck(req.body.wakeup),
                cleaning: castBooleanCheck(req.body.cleaning),
                restaurant: castBooleanCheck(req.body.reestaurant),
                parking: castBooleanCheck(req.body.parking),
                laundry: castBooleanCheck(req.body.laundry)
            },
        })

        await hotelroom.save();

        res.redirect("/admin")
    }
}

exports.renderEditProperty = async (req, res) => {

    const {id} = req.params

    //Buscar por ID la propiedad a editar
    const propertyFounded = await PropertyModel.findById(id).lean();

    res.render("pages/admin/create-property", {
        property: propertyFounded
    })
}

exports.editProperty = async (req, res) => {

    const {id} = req.body;

    const propertyEdit = {
        
        title: req.body.title,
        price: req.body.price,
        currency: req.body.currency,
        availability: req.body.availability,
        owner: req.body.owner,
        phone: req.body.phone,
        description: req.body.description,
        area: req.body.area,
        address: {
            street: req.body.street,
            city: findCity(req.body.city),
            district: findDistrict(req.body.district),
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        amenities: {
            fire_detector: castBooleanCheck(req.body.fire_detector),
            air_conditioner: castBooleanCheck(req.body.air_conditioner),
            heating: castBooleanCheck(req.body.heating),
            wc_private: castBooleanCheck(req.body.wc_private),
            wash_machine: castBooleanCheck(req.body.wash_machine),
            tv: castBooleanCheck(req.body.tv),
            wifi: castBooleanCheck(req.body.wifi),
            dryer: castBooleanCheck(req.body.dryer),
            swimming_pool: castBooleanCheck(req.body.swimming_pool),
            balcony: castBooleanCheck(req.body.balcony),
            terrace: castBooleanCheck(req.body.terrace),
            exterior_views: castBooleanCheck(req.body.exterior_views),
            interior_views: castBooleanCheck(req.body.nterior_views),
            closet: castBooleanCheck(req.body.closet),
            emergency_exit: castBooleanCheck(req.body.emergency_exit),
            accessibility: castBooleanCheck(req.body.accessibility),
            kitchen: castBooleanCheck(req.body.kitchen)
        },
        rules: {
            smoking: castBooleanCheck(req.body.smoking),
            pets: castBooleanCheck(req.body.pets),
            noise: castBooleanCheck(req.body.noise),
            invite: castBooleanCheck(req.body.invite)
        },
        main_photo: {
            url: req.body.main_photo,
            description: req.body.description_main_photo
        },
        photos:[{
            url: req.body.photo1,
            description: req.body.description_photo1
        },{
            url: req.body.photo2,
            description: req.body.description_photo2
        },{
            url: req.body.photo3,
            description: req.body.description_photo3
        }],
        video: req.body.video
    }

    if (req.body.type === "Apartamento") {

        const propertyFounded = await PropertyModel.findOneAndUpdate({_id: id},{
            ...propertyEdit,
            numberRooms : req.body.rooms,
            numberBaths: req.body.baths,
            capacity: req.body.capacity
        })

        return res.redirect(`/apartamento/${id}/apartamento-detail`);
    }
    else if(req.body.type === "Hotel") {

        const propertyFounded = await PropertyModel.findOneAndUpdate({_id: id},{
            ...propertyEdit,
            type: req.body.room_type,
            beds: req.body.beds,
            guests: req.body.guests,
            services: {
                wakeup: castBooleanCheck(req.body.wakeup),
                cleaning: castBooleanCheck(req.body.cleaning),
                restaurant: castBooleanCheck(req.body.reestaurant),
                parking: castBooleanCheck(req.body.parking),
                laundry: castBooleanCheck(req.body.laundry)
            }
        })

        return res.redirect(`/hotel/${id}/hotel-detail`);
    }
}

exports.deleteProperty = async (req, res) => {
        
    const {id} = req.params

    try{
        //Busca por id y que aparezca como No disponible antes de eliminar el alojamiento
        const deleteProperty = await PropertyModel.findOneAndRemove({
            _id: id,
            availability: "No disponible"
        })
    }
    finally{
        res.redirect("/admin/");
    }
}

exports.renderAdminLogin = (req, res) => {
    res.render("pages/admin/login");
}

exports.adminLogin = (req, res) => {
    res.render("pages/admin/login");
}

exports.adminLogout = (req, res) => {
    res.render("pages/admin/login");
}