const express = require('express');
const UsersController = require('../controllers/users'); 

const router = express.Router();

// CREATE - POST
router.post('/', UsersController.createNewUser);

// READ - GET
router.get('/', UsersController.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UsersController.updateUser);

// DELETE - DELETE
router.delete('/:idUser', UsersController.deleteUser);


module.exports = router;