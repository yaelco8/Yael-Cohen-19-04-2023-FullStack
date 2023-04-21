const express = require('express')
const router = express.Router()
const {getCityWeather}=require("./weather.controller")

router.post('/',getCityWeather)

module.exports = router