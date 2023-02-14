const userRouter = require("./UserRouter");
const MainRouter = require("express").Router();

MainRouter.use("/user", userRouter);

module.exports = MainRouter;
