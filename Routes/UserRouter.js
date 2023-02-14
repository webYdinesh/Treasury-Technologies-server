const userDetails = require("../Controllers/UserDetailsController");
const {
    verifyUserCredentails,
} = require("../Middleware/VerifyUserCredentials");

const userRouter = require("express").Router();

userRouter.post("/", verifyUserCredentails, userDetails);

module.exports = userRouter;
