const {PropertyModel, BaseSchema} = require("./property");

module.exports = {
    PropertyModel,
    BaseSchema,
    Booking: require("./booking"),
    User: require("./user"),
    Apartment: require("./apartment"),
    Room: require("./room"),
}