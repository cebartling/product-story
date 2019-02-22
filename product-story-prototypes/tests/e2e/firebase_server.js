// const url = require("url");
const minimist = require("minimist");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const session = require("express-session");
const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://product-story-prototypes.firebaseio.com"
});

const app = express();

// get port from passed in args from scripts/start.js
const port = minimist(process.argv.slice(2)).port;

// const matchesUsernameAndPassword = (body = {}) => {
//   return body.username === "jane.lane" && body.password === "password123";
// };

// parse regular form submission bodies
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(morgan("dev"));

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get(
  "/user",
  urlencodedParser,
  asyncMiddleware(async (req, res, next) => {
    const email = req.query.email;
    try {
      const user = await admin.auth().getUserByEmail(email);
      res.json(user);
    } catch (err) {
      next(err);
    }
  })
);

app.listen(port, () => {});
