const mongoose = require('mongoose');
require("dotenv").config();
// mongoose.set('strictQuery', false);
const connect = async () => {
    const created = await mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    if (created) {
        console.log("Connected to db")
    } else {
        console.log("Not connected to db")
    }
}
connect();