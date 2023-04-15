require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const app = express();
require("./config/db_connection");
const note_route = require("./routes/note_route")

app.use(express.json());
app.use("/note", note_route);

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});