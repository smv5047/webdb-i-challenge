const express = require("express")

const server = require('./server.js');
const accountsRouter = require("./accounts/accounts-router")

server.use(express.json())
server.use("/api/accounts", accountsRouter)

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});