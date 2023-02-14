const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
exports.connectDB = async () => {
    const MONGODBURI = process.env.MONGODBURI;
    await mongoose.connect(
        MONGODBURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => {
            console.log("Database Connected Succesfully");
        }
    );
};
