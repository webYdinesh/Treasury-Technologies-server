const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phone: {
            type: Number,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timeStamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
