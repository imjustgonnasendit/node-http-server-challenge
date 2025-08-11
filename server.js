const http = require("http");
const HOST = "localhost";
const PORT = 4000;
http
  .createServer((req, res) => {
    res.end("Hello, Galvanize!");
  })
  .listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
  });
