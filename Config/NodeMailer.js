const nodemailer = require("nodemailer");
const mailFormatGenerator = require("./mailFormat");

exports.sendEmail = async (user) => {
    try {
        const mailTransport = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            auth: {
                user: "dineshwarrior1234@gmail.com",
                pass: "taffrzmawxymghtf",
            },
        });
        const info = await mailTransport.sendMail({
            from: "<dineshwarrior1234@gmail.com>",
            to: "dineshbisht11223344@gmail.com",
            subject: "Treasury Technologies Message",
            html: mailFormatGenerator(user),
        });
        console.log(info.messageId);
    } catch (error) {
        console.log(error);
    }
};
