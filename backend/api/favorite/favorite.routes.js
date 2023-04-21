const express = require('express')
const router = express.Router()
const {addFavorite, removeFavorite,getFavorites}=require("./favorite.controller")

router.get('/',getFavorites)
router.post('/',addFavorite)
router.delete('/:id',removeFavorite)

module.exports = router