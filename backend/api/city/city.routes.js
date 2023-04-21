const express = require('express')
const router = express.Router()
const {getCities}=require("../city/city.controller")

router.get('/:searchText',getCities)

module.exports = router