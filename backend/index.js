const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

const app = express();

app.use("/api/v1", mainRouter);

app.use("/api/v1", v2Router);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})


/*

/api/v1/users/signup
/api/v1/users/signin


*/