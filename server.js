const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hey I am a Web developer </h1>");
    res.write("<h5> My name is oli ullah jewel </h5>");
    res.end();
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
});