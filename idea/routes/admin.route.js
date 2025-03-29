const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const adminController = require('../controller/admin.controller');

//GET REQUESTS
router.get('/getDetail/:email', adminController.getDetailbyEmail);

//POST REQUESTS
router.post('/admin-register', adminController.register);
router.post('/admin-login', adminController.login);



//DELETE REQUESTS
router.delete('/delete/:id', adminController.deleteAdmin);

module.exports = router;