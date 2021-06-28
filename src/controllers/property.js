const {PropertyModel} = require("../models/index")

//Detalle de la propiedad
exports.detail = async (req, res) => {
    
    try{
        const {id} = req.params;

        const property = await PropertyModel.findById(id).lean()

        return res.render("pages/property-detail", {
                property: property,
        })
 
    } catch (error) {
        console.log("Error", error);
        if(error){
            return res.redirect("/")
        }
    }
}