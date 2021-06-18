const {PropertyModel} = require("../models/property")


exports.home = async (req, res) => {
    try{

        const listProperties = await PropertyModel.find().lean();

        res.render("pages/index",{
            allProperties : listProperties,
        })
    } catch (error) {
        console.log(error);
    }

}

exports.about = (req, res,) => {
    res.render("pages/about");
}


exports.search = async (req, res, next) => {

    const {title, city, apartment, hotel} = req.query
    const query= {}

    //Condiciones filtros    
    title && (query["title"] = new RegExp(title,'i'))
    city && (query["address.city"] = city)
    apartment && !hotel && (query["__t"] = "Apartamento")
    !apartment && hotel && (query["__t"] = "Hotel")





    //***************************/ Paginación *************************************
    const url = req._parsedOriginalUrl.search.replace(/&page=\d/g, "");

    let perPage = req.query.limit;
    let page = req.query.page || 1;

    const PropertyListCount = await PropertyModel.find(query).count()
    ;
    
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
        });

}


