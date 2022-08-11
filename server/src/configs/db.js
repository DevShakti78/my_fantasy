let mongoose = require("mongoose");
let connect = ()=>{
    return mongoose.connect("mongodb://shakti:shakti@ac-0hdwvid-shard-00-00.tvcqtzn.mongodb.net:27017,ac-0hdwvid-shard-00-01.tvcqtzn.mongodb.net:27017,ac-0hdwvid-shard-00-02.tvcqtzn.mongodb.net:27017/?ssl=true&replicaSet=atlas-usxg48-shard-0&authSource=admin&retryWrites=true&w=majority")
}
module.exports = connect;