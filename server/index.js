require("dotenv").config();
const express = require("express");
const session = require("express-session");
const checkForSession = require("../server/middlewares/checkForSession")
const swagController = require("../server/controllers/swagController")
const authController = require("../server/controllers/authController")
const cartController = require("../server/controllers/cartController")
const searchController = require("../server/controllers/searchController")

const app = express();

let {SERVER_PORT, SESSION_SECRET } = process.env;
app.use(express.json());
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)
app.use(checkForSession);
//endpoints//
app.post("/api/login", authController.login);
app.post("/api/register", authController.register);
app.post("/api/signout", authController.signout);
app.post("/api/cart/checkout", cartController.checkout);
app.post("/api/cart/:id", cartController.add);
app.get('/api/user', authController.getUser);
app.delete("/api/cart/:id", cartController.delete);
app.get("/api/swag", swagController.read);
app.get("/api/search", searchController.search)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})
