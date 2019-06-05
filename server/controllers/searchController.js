const swag = require("../models/swag")

module.exports = {
    search: function (req, res ) {
     const {category}= req.query
     if (!category) {
        res.status(200).json(swag)
     } 
     else {
        const filteredSwag = swag.filter((article) => {
            return category === article.category
        })
         res.status(200).json(filteredSwag)
     }
    }
}