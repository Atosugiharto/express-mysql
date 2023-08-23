const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();
        res.json({
            message: 'GET all users success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;

    if(!body.name || !body.email || !body.address){
        return res.status(400).json({
            message: 'Data yang dikirimkan tidak lengkap'
        })
    }
    try {
        await UserModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE user success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const { idUser } = req.params;
    const { body } = req;

    try {
        console.log(`id user: ${idUser}`);
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body,
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;

    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: `DELETE user with id ${idUser} success`,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}