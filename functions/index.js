const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I30QOL2pdcMLCFOxu7mg00lblUFLoTz6p4sbVjKiODdXAezb2lZolhXFVrNdLNYQPWfIi3CJwu3dBTXl20KXf4A00VsgMR9XF"
);
//api

//app config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

//listen command
exports.api = functions.https.onRequest(app);
