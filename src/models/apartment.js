const {BaseSchema, PropertyModel} = require("./property")


const ApartmentSchema = new BaseSchema({
    numberRooms : { type: Number, default: 1 },
    numberBaths: { type: Number, default: 1 },
}) 


module.exports = PropertyModel.discriminator("Apartamento", ApartmentSchema)