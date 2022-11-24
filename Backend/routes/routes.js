const express = require('express')
const bodyParser = require('body-parser')
const router = express()
require("../database/dotenv");
const cors = require('cors');
const http = require('http')
// const port = 3001
const port = process.env.PORT || 3001;

const register = require("../controllers/register")
const login = require("../controllers/login")

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require('dotenv');

dotenv.config();

var corsOptions = {
    origin:"http://localhost:4200"
  }
  
  router.use(cors(corsOptions));
  
  router.use(bodyParser.json())
  router.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  
  router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  //routes for registering
router.post('/users/register', register.registerUser)

//routes for login
router.post('/users/login', login.login)

router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })