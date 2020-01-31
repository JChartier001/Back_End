const server = require("./server.js");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`\n** Server running on port: ${PORT} **\n`);
});
