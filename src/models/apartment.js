const {BaseSchema, PropertyModel} = require("./property")


const ApartmentSchema = new BaseSchema({
    numberRooms : { type: Number, default: 0 },
    numberBaths: { type: Number, default: 0 },
}) 


module.exports = PropertyModel.discriminator("Apartamento", ApartmentSchema)