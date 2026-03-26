const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/contact",contactRoutes);

app.get("/", (req,res)=>{
res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});