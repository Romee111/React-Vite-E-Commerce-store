const users = require("../models/userauthmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");





exports.register = async (req, res) => {
    try {
        var { firstName, lastName, email, password, phone, isAdmin,isSeller, address1, address2, city, pincode, country, state, isShipper, image, retypePassword } = req.body;
        const hashPassword = await bcrypt.hash(password, 10)
        state = JSON.stringify(state);
        const user = await users.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            phone: phone,
            address1: address1,
            address2: address2,
            city: city,
            pincode: pincode,
            country: country,
            state: state,
            isAdmin: Boolean(isAdmin),
            isSeller: Boolean(isShipper),
            image: image || '../assests/reslogo.png',
            retypePassword: retypePassword


        })

        res.status(201).json({
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

exports.login = async (req, res) => {
    try {

        console.log("API CALLED", req.body);
        const { email, password } = req.body
        const user = await users.findOne({ email: email })


        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "invalid credentials"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {

            return res.status(401).json({
                status: "fail",
                message: "invalid credentials"
            })
        }
        const token = jwt.sign({ id: user._id, name: user.name, isAdmin: user.isAdmin, isSeller: user.isSeller }, process.env.JWT_SECRET, { expiresIn: "2 days" });
        res.cookie('jwt', token, {
            httpOnly: true,
        }
        )

        console.log(user, "USER");

        res.status(200).json({
            status: "success",
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
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
            
            token,
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
        const user = await useAuth.findById({ _id: id })
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
        const userExists = await users.findOne({ email: req.body.email })
        if (userExists) {
            newPassword = await bcrypt.hash(req.body.password, 10)
        }
        else {
            newPassword = req.body.password
        }

        const id = req.params.id
        const { name, email, isShipper } = req.body
        const user = await users.findByIdAndUpdate(id, {
            name: name,
            email: email,
            isShipper: isShipper,

        })
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
    // try {
    //     const { email } = req.body
    //     const user = await users.findOne({ email: email })
    //     if (!user) {
    //         return res.status(401).json({
    //             status: "fail",
    //             message: "no email found"
    //         })
    //     }
        
    //     const forgetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    //     console.log(process.env.EMAIL,process.env.PASSWORD)
    //     const tranporter=nodemailer.createTransport({
    //         service:"gmail",
    //         auth:{
    //             user:process.env.EMAIL,
    //             pass:process.env.PASSWORD,
                
    //         }
            
            
    //     })

    //     const mailOptions = {
    //         from: process.env.EMAIL,
    //         to: user.email,
    //         subject: "Forget Password",
    //         html: `<h1>Forget Password</h1>
    //         <p>click on this <a href="http://localhost:2900/userauth/resetPassword/${forgetToken}">link</a> to reset your password</p>`
    //     };

    //         await tranporter.sendMail(mailOptions);
    //     res.status(200).json({
    //         status: "success",
    //         message:'Emaail has been sent',
    //         data: {
    //             forgetToken
    //         }
    //     })
    // }
    // try {
    //     const { email } = req.body
    //     const user = await users.findOne({ email: email })
    //     if (!user) {
    //         return res.status(401).json({
    //             status: "fail",
    //             message: "no email found"
    //         })
    //     }
        
    //     const forgetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    //     console.log(process.env.EMAIL,process.env.PASSWORD)
    //     var transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //           user: 'ceorestorex@gmail.com',
    //           pass: 'pwje ylws zzma gmf'
    //         }
    //       });
          
    //       var mailOptions = {
    //         from: 'youremail@gmail.com',
    //         to: 'myfriend@yahoo.com',
    //         subject: 'Sending Email using Node.js',
    //         text: 'That was easy!'
    //       };
          
    //       transporter.sendMail(mailOptions, function(error, info){
    //         data:{{
    //             forgetToken

    //         }}
    //         if (error) {
    //           console.log(error);
    //         } else {
    //           console.log('Email sent: ' + info.response);
    //         }
    //       });
          
          
    //     }
        
    // catch (err) {
    //     res.status(400).json({
    //         status: "fail",
    //         message: err
    //     })
    // }
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
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL, // Ensure this matches the sending email
                    pass: process.env.PASSWORD
                }
            });
    
            const mailOptions = {
                from: process.env.EMAIL, // Use the correct sending email
                to: user.email,
                subject: 'Forget Password',
                html: `<h1>Forget Password</h1>
                <p>Click on this <a href="http://localhost:2900/userauth/resetPassword/${forgetToken}">link</a> to reset your password</p>`
            };
    
            // Send the email
            transporter.sendMail(mailOptions, function(error, info) {
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
}


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
