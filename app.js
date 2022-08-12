const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
const dbURI =
    "mongodb+srv://oliullah:partex4064@node-crash-course.xmsus1d.mongodb.net/node-crash-course?retryWrites=true&w=majority";

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
//register view engine
app.set("view engine", "ejs");
//listen for requests

// app.use((req, res, next) => {
//     console.log("new request made");
//     console.log("host: ", req.hostname);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log("in the next middleware");
//     next();
// });
//middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.get("/", (req, res) => {
    // res.send("<p>Home Page</p>");
    const blogs = [
        { title: "Blog 1", snippet: "This is a blog 1 snippet" },
        { title: "Blog 2", snippet: "This is a blog 2 snippet" },
        { title: "Blog 3", snippet: "This is a blog 3 snippet" },
    ];
    res.render("index", { title: "Home Page", blogs });
});
app.get("/about", (req, res) => {
    // res.send("<p>About Page</p>");
    res.render("about", { title: "About" });
});

//redirects
app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

//404 page

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});