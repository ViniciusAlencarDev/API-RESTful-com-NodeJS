const router = require('express').Router()

const UserController = require('./Controllers/UserController')

router.get('/user/login', UserController.login)

module.exports = router;
