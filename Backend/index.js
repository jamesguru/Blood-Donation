const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./utils/db");
dotenv.config();

//PORT
const PORT = process.env.PORT

// server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
    dbConnection();
})