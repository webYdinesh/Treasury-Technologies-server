const { sendEmail } = require("../Config/NodeMailer");
const UserModel = require("../Models/UserModel");

const userDetails = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        const user = await UserModel.create({
            firstName,
            lastName,
            email,
            phone,
            message,
        });
        sendEmail(user);
        return res.send({
            status: "ok",
            message: "Form Submitted. Our Team Will Contact You Soon...",
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.send({
                status: "error",
                message: "Email is already exist.",
            });
        }
        return res.send({
            status: "error",
            message: "Internal server error",
        });
    }
};

module.exports = userDetails;
