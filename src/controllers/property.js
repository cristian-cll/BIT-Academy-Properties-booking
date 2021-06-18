const {PropertyModel} = require("../models/property")


//Detalle de la propiedad
exports.detail = async (req, res) => {
    
    try{
        const {id} = req.params;

        const property = await PropertyModel.findById(id).lean()

        res.render("pages/property-detail", {
                property: property,
        })

        
    } catch (error) {
        console.log(error);
    }
}

