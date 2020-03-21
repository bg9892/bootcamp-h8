 const express = require("express");
 const apiRoutes = require("./routes/apiRoutes");
 const htmlRoutes = require("./routes/htmlRoutes");
 var path = require("path");
 var db = require("./db/db.json");

 const app = express();
 const PORT = process.env.PORT || 3000;

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, "public")));
 app.use("/", apiRoutes);
 app.use("/", htmlRoutes);




// app.get("/api/notes", function (req, res) {
//     console.log(res);
//     return res.json(db);
// })   

// app.post("api/notes", function (req, res) {
//     console.log(res);
//     res.send(db);
//     db.push(req.body);
// })










 app.listen(PORT, () => console.log(`Listining on PORT: ${PORT}`));


 


