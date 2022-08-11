const mongoose = require("mongoose");


const productScheema = new mongoose.Schema({
    "id": { required: true, type: Number, unique: true },
    "title": { required: true, type: String },
    "catog": { required: true, type: String },
    "release_date":{required: true ,type: String},
    "desc": { required: true, type: String },
    "rating": { required: true, type: Number },
    "votes": { required: true, type: Number },
    "img": { required: true, type: String },
},{
    versionKey: false,
    timestamps: true
});
const Product = mongoose.model("product", productScheema);
module.exports = Product;




