const adminModel = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const validator = require('../utils/validators');
const jwt = require('jsonwebtoken');
const helper = require('../utils/helper');

const register = async (req, res) => {
    try {
        const { name, email, pass, cPass } = req.body;
        if (!name || !pass || !cPass || !email) {
            return res.status(400).json({ message: 'All field are required' });
        }
        if (pass != cPass) {
            return res.status(400).json({ message: 'Invalid Credential' });
        }
        if (!validator.checkEmail(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        if (!validator.checkPass(pass)) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const existingAdmin = await adminModel.findOne({ email });
        if (existingAdmin) {
            return res.status(400).send({ message: 'User already exists' });
        }
        const hashedPass = await bcrypt.hash(pass, 10);
        const newAdmin = new adminModel({ name, email, password: hashedPass });
        await newAdmin.save();
        res.status(200).json({ message: 'Admin Added to DataBase', Admin: { name: newAdmin.name, email: newAdmin.email } });
    } catch (e) {
        res.status(500).json({ message: 'server error', error: `${e.message}` });
    };
};

const login = async (req, res) => {
    console.log('Login endpoint hit');
    console.log('Request body:', req.body);
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // try {
    //     const admin = await adminModel.findOne({ email });
    //     console.log('Admin found:', admin); 
    //     if (!admin) {
    //         return res.status(400).json({ message: 'Invalid Credentials' });
    //     }

    //     const isMatchPass = await bcrypt.compare(pass, admin.password);
    //     if (!isMatchPass) {
    //         return res.status(400).json({ message: 'Invalid Credentials' });
    //     }

    //     admin.updatedAt = new Date();
    //     await admin.save();

    //     const token = jwt.sign({ id: admin._id }, process.env.SECRET, { expiresIn: '2' });
    //     return res.status(200).json({ message: 'Login successful', token, email });
    // } catch (error) {
    //     console.error('Error occured:', error); 
    //     return res.status(500).json({ message: 'Server error', error });
    // }
    try {
        const admin = await adminModel.findOne({ email });
        console.log('Admin found with email:', email);

        if (!admin) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatchPass = await bcrypt.compare(pass, admin.password);
        if (!isMatchPass) {
            console.log('Password mismatch');
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        admin.updatedAt = new Date();
        await admin.save();

        if (!process.env.SECRET) {
            return res.status(500).json({ message: 'Server error: SECRET not defined' });
        }


        // const token = jwt.sign({ id: admin._id }, process.env.SECRET, { expiresIn: '10s' });
        // const expiresIn = new Date(Date.now() + 10 * 1000).toISOString();

        const tokenGen = helper.createJWT(email);
        const { token, expiresIn } = tokenGen;

        console.log(token, expiresIn);

        return res.status(200).json({ message: 'Login successful', token, email, expiresIn });
    } catch (error) {
        console.error('Error occurred:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



const deleteAdmin = async (req, res) => {
    const { email, pass } = req.body;
    try {
        if (!email || !pass) {
            res.status(400).json({ message: 'All fields are required' });
        }
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid Credential' });
        }
        const isMatchPass = await bcrypt.compare(pass, admin.password);
        if (!isMatchPass) {
            return res.status(400).json({ message: 'Invalid Credential' });
        }
        await adminModel.deleteOne({ email });
        res.status(200).json({ message: 'Admin Deleted Successfully' });
    } catch (e) {
        res.status(500).json({ message: 'server error', error: `${e.message}` });
    }
}


const getDetailbyEmail = async (req, res) => {
    try {
        const { email } = req.params;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: "Admin not found" });
        }

        res.status(200).json(admin);
    }
    catch (error) {
        console.log('Error fetching admin details:');
        res.status(500).json({ message: "Server error", error });
    }
}



module.exports = {
    register,
    login,
    deleteAdmin,
    getDetailbyEmail
}