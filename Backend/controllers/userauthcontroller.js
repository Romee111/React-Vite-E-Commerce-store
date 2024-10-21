const users = require("../models/userauthmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");





exports.register = async (req, res) => {
    try {
        let {
            firstName,
            lastName,
            email,
            password,
            phone,
            isAdmin,
            isSeller,
            address1,
            address2,
            city,
            pincode,
            country,
            state,
            image,
            retypePassword,
            sellersAddress,
            dateOfBirth,
            ID_CardNumber,
            ID_image1,
            ID_image2,
            Business_Name,
            Business_Address,
            Business_Type,
            Business_registrationNumber,
            Tax_IDNumber,
            Bank_AccountNumber,
            Bank_Name,
            Account_HolderName,
            Branch_Code
        } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);
        state = JSON.stringify(state); // Ensure state is stored as string if it's an object

        // Create a base user object
        let userObj = {
            firstName,
            lastName,
            email,
            password: hashPassword,
            phone,
            address1,
            address2,
            city,
            pincode,
            country,
            state,
            isAdmin: Boolean(isAdmin),
            isSeller: Boolean(isSeller),
            image: image || '../assets/reslogo.png',
            retypePassword
        };

        // If the user is a seller, add seller-specific fields
        if (isSeller) {
            Object.assign(userObj, {
                sellersAddress,
                dateOfBirth,
                ID_CardNumber,
                ID_image1,
                ID_image2,
                Business_Name,
                Business_Address,
                Business_Type,
                Business_registrationNumber,
                Tax_IDNumber,
                Bank_AccountNumber,
                Bank_Name,
                Account_HolderName,
                Branch_Code
            });
        }

        // Create user in the database
        const user = await users.create(userObj);

        res.status(201).json({
            status: "success",
            data: {
                user
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};


// exports.login = async (req, res) => {
//     try {

//         console.log("API CALLED", req.body);
//         const { email, password } = req.body
//         const user = await users.findOne({ email: email })


//         if (!user) {
//             return res.status(401).json({
//                 status: "fail",
//                 message: "invalid credentials"
//             })
//         }
//         const isMatch = await bcrypt.compare(password, user.password)

//         if (!isMatch) {

//             return res.status(401).json({
//                 status: "fail",
//                 message: "invalid credentials"
//             })
//         }
//         const token = jwt.sign({ id: user._id, name: user.name, isAdmin: user.isAdmin, isSeller: user.isSeller }, process.env.JWT_SECRET, { expiresIn: "2 days" });
//         res.cookie('jwt', token, {
//             httpOnly: true,
//         }
//         )

//         console.log(user, "USER");

//         res.status(200).json({
//             status: "success",
//             isAdmin: user.isAdmin,
//             isSeller: user.isSeller,
//             user_id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//             phone: user.phone,
//             address1: user.address1,
//             address2: user.address2,
//             city: user.city,
//             pincode: user.pincode,
//             country: user.country,
//             state: user.state,
//             image: user.image,

//             token,
//         })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(400).json({
//             status: "fail",
//             message: "invalid credentials"
//         })
//     }
// }
exports.login = async (req, res) => {
    try {
        console.log("API CALLED", req.body);
        const { email, password } = req.body;

        // Fetch user by email
        const user = await users.findOne({ email: email });

        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"  // More clear message
            });
        }

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid credentials"
            });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                isAdmin: user.isAdmin,
                isSeller: user.isSeller
            },
            process.env.JWT_SECRET,
            { expiresIn: "2 days" }
        );

        // Set the token in cookies
        res.cookie('jwt', token, { httpOnly: true });

        console.log("User logged in: ", user);

        // Return success response with user details
        res.status(200).json({
            status: "success",
            isAdmin: user.isAdmin || false, // Default false if not present
            isSeller: user.isSeller || false, // Default false if not present
            user_id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            address1: user.address1,
            address2: user.address2,
            city: user.city,
            pincode: user.pincode,
            country: user.country,
            state: user.state,
            image: user.image,
            token
        });
    } catch (err) {
        console.log("Login error: ", err);
        res.status(400).json({
            status: "fail",
            message: "An error occurred while logging in."
        });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const user = await users.find()
        res.status(200).json({
            status: "success",
            data:
                user

        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await users.findById({ _id: id })
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })

    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


exports.updateUser = async (req, res) => {
    try {
        let newPassword;
        if (req.body.password) {
            newPassword = await bcrypt.hash(req.body.password, 10)
        }
        const id = req.params.id;
        const user = await users.findByIdAndUpdate(id, {...req.body,newPassword},{ new: true })
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await users.findByIdAndDelete({ _id: id })
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await users.findOne({ email: email });
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "No email found"
            });
        }

        const forgetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Use environment variables for credentials
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            // secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL, // Use the correct sending email
            to: user.email,
            subject: 'Forget Password',
            html: `<h1>Forget Password</h1>
                <p>Click on this <a href="http://localhost:2900/userauth/resetPassword/${forgetToken}">link</a> to reset your password</p>`
        };

        // Send the email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    status: "fail",
                    message: "Error sending email",
                    error: error.message
                });
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({
                    status: "success",
                    message: 'Email has been sent',
                    data: {
                        forgetToken
                    }
                });
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};



exports.resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body
        const reset = jwt.verify(token, process.env.JWT_SECRET)
        const user = await users.findById(reset.id)
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "invalid token"

            })
        }
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })
    }
    catch (err) {
        console.log(err)
    }

}


exports.logout = async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({
            status: "success"
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })

    }
}
exports.googleLogin = async (req, res) => {
    try {
        const { email } = req.body
        const user = await users.findOne({ email: email })
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "no email found"
            })
        }
        const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "2 days" });
        res.cookie('jwt', token, {
            httpOnly: true,
        }
        )



        res.status(200).json({
            status: "success",
            token
        })
    }

    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "fail",
            message: "invalid credentials"
        })
    }
}
