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
const food = require("../controllers/food")
const bookings = require("../controllers/booking")

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const dotenv = require('dotenv');

dotenv.config();

//const app = express();

cloudinary.config({
    cloud_name: 'dhtppljex',
    api_key: '259573781321246',
    api_secret: '1O8o4GDLf82SMhjj8yL9kPJRrSE',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  return res.json({ message: "Hello World 🇵🇹 🙌" });
});

router.post("/newUpload", upload.single("image"), async (req, res) => {
  return res.json({ image: req.file.path });
});

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

//Routes for food
router.get('/items', food.getItems)
router.get('/item/:id', food.getItemByName)
router.post('/items', food.postItem)
router.put('/items/:id', food.updateItem)
router.delete('/item/:id', food.deleteItem)

//routes for bookings
router.post('/bookings', bookings.addBooking)
router.get('/bookings', bookings.getAllBookings)
router.get('/bookings/:id', bookings.getBookingById)
router.put('/bookings/:id', bookings.updateBooking)
router.get('/userBooking', bookings.getUserBooking)

// router.delete('/bookings/:id', bookings.deleteBooking)

router.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })