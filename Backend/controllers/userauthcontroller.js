const users = require("../models/userauthmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");






exports.register = async (req, res) => {
    try {
        var { firstName, lastName, email, password, phone, isAdmin, address1, address2, city, pincode, country, state, isShipper, image, retypePassword } = req.body;
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
            isShipper: Boolean(isShipper),
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
        const token = jwt.sign({ id: user._id, name: user.name, isAdmin: user.isAdmin, isShipper: user.isShipper }, process.env.JWT_SECRET, { expiresIn: "2 days" });
        res.cookie('jwt', token, {
            httpOnly: true,
        }
        )

        console.log(user, "USER");

        res.status(200).json({
            status: "success",
            isAdmin: user.isAdmin,
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
            isShipper: user.isShipper,
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
        const user = await users.find().select("-_id name email isAdmin");
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
    try {
        const { email } = req.body
        const user = await users.findOne({ email: email })
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "no email found"
            })
        }
        const forgetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({
            status: "success",
            data: {
                forgetToken
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
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
