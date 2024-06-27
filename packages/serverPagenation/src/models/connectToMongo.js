const mongoose = require('mongoose');

require("dotenv").config()
const ss = process.env.MONGO_URI
console.log(ss)
async function connectToMongo() {
    try {
        mongoose.connect(ss)
            .then(res => console.log("### DB - Connection ###"))
    } catch (error) {
        console.log(error)
    }
}
module.exports = { connectToMongo };

