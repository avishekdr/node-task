const http = require("http"), app = require("./src/api"), server = http.createServer(app);
server.listen(3000);
