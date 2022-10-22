const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const userRoutes = require("./routes/v1/user.routes");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


// database connected
dbConnect();

// create all routes
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/user", userRoutes)



// start server and send resonse
app.get("/", (req, res) => {
    res.send("Hello world")
})



// if no route found run this code 
app.all("*", (req, res) => {
    res.send("Route Not Found")
})

// global error handler
app.use(errorHandler)

// run port 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})


// Manage All error without express 
process.on("unhandledRejection", (error) =>{
    console.log(error, name, error.message);
    app.close(() => {
      process.exit(1);
    })
  })