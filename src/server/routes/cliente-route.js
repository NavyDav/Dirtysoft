const { Router } = require("express");
const userController = require("../controllers/cliente-controller");

const router = Router();

//user routes
router.post('/create', userController.createUsers);
router.get('/allcliente', userController.getUsers);
router.get('/onecliente/:id', userController.getOneUser);
router.put('/update/:id', userController.getUpdate);


module.exports = router; 
