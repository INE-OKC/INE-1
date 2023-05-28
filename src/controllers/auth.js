const user = require('../models/user');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const emailExists = await user.findOne(email);
        if (emailExists){
        return
        }
        const user = await user.create({ name, email, password });
        res.status(StatusCodes.CREATED).json({ user });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error })
    }
};

module.exports = {
    register
};