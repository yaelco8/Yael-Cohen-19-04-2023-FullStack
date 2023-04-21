const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const dotenv=require('dotenv')

dotenv.config()

const app = express()
const http = require('http').createServer(app)

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000','http://127.0.0.1:3001', 'http://localhost:3001'],
    credentials: true
}
app.use(cors(corsOptions))

const cityRoutes=require("./api/city/city.routes")
const weatherRoutes=require("./api/weather/weather.routes")
const favoriteRoutes=require("./api/favorite/favorite.routes")

app.use('/api/city',cityRoutes)
app.use('/api/weather',weatherRoutes)
app.use('/api/favorite',favoriteRoutes)

const logger = require('./services/logger.service')
const port = process.env.PORT || 3000
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})