const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");
//listen for requests

app.listen(3000);

app.use((req, res, next) => {
    console.log("new request made");
    console.log("host: ", req.hostname);
    console.log("path: ", req.path);
    console.log("method: ", req.method);
    next();
});

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