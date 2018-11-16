const mongoose = require("mongoose");
const moongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({ 
    title : {
        type : String,
        require : true 
    },
    description : {
        type : String, 
        required : true
    },
    url : { 
        type : String,
        required :  true
    },
    createAt : { 
        type : Date,
        default : Date.now
    }

});

ProductSchema.plugin(moongoosePaginate);
mongoose.model("Product", ProductSchema);