const {Booking, PropertyModel} = require("../models/index")

exports.home = async (req, res) => {
    try{
        const lastAddedApartments = await PropertyModel.find({__t: "Apartamento", availability: { $nin: "No disponible"}}).limit(4).lean();
        const lastAddedHotels = await PropertyModel.find({__t: "Hotel", availability: { $nin: "No disponible"}}).limit(4).lean();

        res.render("pages/index",{
            lastAddedApartments,
            lastAddedHotels
        })
    } 
    catch (error) {
        console.log(error);
    }
}

exports.about = (req, res,) => {
    res.render("pages/about");
}

exports.search = async (req, res, next) => {

    //Si no hay parametros en la querystring o se accede directamente a /search/
    if(!req._parsedOriginalUrl.search){
        return res.redirect("/")
    }

    // Busca primero las propiedades ocupadas según FECHA
    const checkIn = req.query.date_in
    const checkOut = req.query.date_out
    
    let occupiedPropertiesId = [];
    
    //Evitar mal dato intencionado en la query 
    // Si el checkIn es mayor o igual que checkOut 

    if(new Date(checkIn) >= new Date(checkOut)){
        console.log("checkIn mayor o igual que checkout ");
        return res.redirect("/")
    }
    try{
        const confirmedBookings = await Booking.find({

              $or: [
                {checkIn: {$gte: new Date(checkIn), $lte: new Date(checkOut)}},
                {checkOut: {$gte: new Date(checkIn), $lte: new Date(checkOut)}},
                {$and: [
                  {checkIn: {$lt: new Date(checkIn)}},
                  {checkOut: {$gt: new Date(checkOut)}}
                ]}
            ]

        })
        occupiedPropertiesId = confirmedBookings.map(confirmedBooking => confirmedBooking.property._id);
    }
    catch (err) {
        console.error('Search', err.message);
    }
    //Ejecuta lo siguiente, si lo anterior funciona o no
    finally {

    //************************************* Búsqueda *************************************
    const {title, city, apartment, hotel, capacity} = req.query;
    const query= {};

    //Condiciones - filtros

    title && (query["title"] = new RegExp(title,'i'));
    city && (query["address.city"] =  new RegExp(city,'i'));
    capacity && (query["capacity"] = {$gte: capacity});
    apartment && !hotel && (query["__t"] = "Apartamento");
    !apartment && hotel && (query["__t"] = "Hotel");
    query["availability"] = { $nin: "No disponible" }
    query["_id"] = { $nin: occupiedPropertiesId } // No incluídas las prop. resevadas


    const PropertyListCount = await PropertyModel.find(query).countDocuments();


    //************************************* Paginación *************************************

    const url = req._parsedOriginalUrl.search.replace(/&page=\d/g, "");

    let perPage = req.query.limit;
    let page = req.query.page || 1;

    
    const pagination = {
        total : PropertyListCount,
        limit : Number(perPage), 
        page: Number(page),
        totalPages: function(){ return Math.ceil(this.total / this.limit); },
        pageExist : function(){ return this.page == 1 || this.page <= this.totalPages(); },
        pageOffset : function(){ return (this.limit * this.page)-this.limit; }
      }

      if(!pagination.pageExist()){
          return res.render('pages/search', {
                  listProperties: [],
                  current: pagination.page,
                  pages: pagination.totalPages(),
                  url,
                  perPage,
              });
      }

      const pageResult = await PropertyModel.find(query).lean()
      .skip(pagination.pageOffset()) //offset 
      .limit(pagination.limit) 


      res.render('pages/search', {
          listProperties: pageResult,
          current: pagination.page,
          pages: pagination.totalPages(),
          url,
          perPage,
          search: req.query
        });

    }// End finally
}