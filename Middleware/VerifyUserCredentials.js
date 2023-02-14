exports.verifyUserCredentails = (req, res, next) => {
    try {
        const { firstName, email, message } = req.body;
        if (!firstName || !email || !message) {
            return res.send({
                status: "error",
                message: "Some of input fields are required",
            });
        }
        if (
            !email.match(
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
        ) {
            return res.send({
                status: "error",
                message: "Email is invalid",
            });
        }
        next();
    } catch (error) {
        res.send({
            status: "error",
            message: "Internal server error",
        });
    }
};
