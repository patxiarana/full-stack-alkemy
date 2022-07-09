const {Router} = require('express')
const router = Router()

const {getOperations} = require('../controllers/index.controllers')

router.get('/operations', getOperations)




module.exports = router

