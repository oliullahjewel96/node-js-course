const fs = require("fs");

//reading file
// fs.readFile("docs/blog1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//writing file

// fs.writeFile("docs/blog1.txt", "Hello World", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File created");
// });
// fs.writeFile("docs/blog2.txt", "first blog", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("File created");
// });

// directories

// if (!fs.existsSync("assets")) {
//     fs.mkdir("assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Directory created");
//     });
// } else {
//     fs.rmdir("assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Directory deleted");
//     });
// }

//deleting file

// if (fs.existsSync("docs/blog1.txt")) {
//     fs.unlink("docs/blog1.txt", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("File deleted");
//     });
// }