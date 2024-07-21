//import required libraries/packages
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
require('./conf/passport')(passport);
const pgSession = require('connect-pg-simple')(session);
const { Pool } = require('pg');
require('ejs');
require('./conf/facebookPassport')(passport);
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");

// Import API Routers
const authRouter = require('./router/auth');
const courseRouter = require('./router/course/course');
const socialHandleRouter = require('./router/socialHandle');
const courseDomainRouter = require('./router/course/courseDomain');
const courseCategoryRouter = require('./router/course/courseCategory');
const qnaRouter = require('./router/qna');
const courseReviewRouter = require('./router/course/courseReview');
const cartRouter = require('./router/cart');
const enrollCourseRouter = require('./router/enrolledCourse');
const oauthRouter = require('./router/oauth');
const oauthFbRouter = require('./router/oauthFb');
const gameRouter = require('./router/game')
const esewaRouter = require('./router/esewa')
const swiper = require('./router/swiper')

// Import Controllers
const initializeSocket = require('./socket/chat/socket');
const home = require('./controller/home');

const app = express();
app.use(cors());

// Websocket
const server = http.createServer(app);
const io = new Server(server);
initializeSocket(io);

app.set( 'view engine' , 'ejs' ); 


//implement bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Postgres db connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL // Replace with your PostgreSQL connection string
});

//Session handling
app.use(
  session({
    store: new pgSession({
      pool, tableName: "session" // Optionally, specify the name of the session table
    }),
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Media URL
app.use('/media', express.static('media'));
app.use('/public', express.static("public"));

// Use API Routers
app.use('/auth', authRouter);
app.use('/', home);
app.use('/course', courseRouter);
app.use('/socialHandle', socialHandleRouter);
app.use('/courseDomain', courseDomainRouter);
app.use('/courseCategory', courseCategoryRouter);
app.use('/', qnaRouter);
app.use('/courseReview', courseReviewRouter);
app.use('/cart', cartRouter);
app.use('/enroll', enrollCourseRouter);
app.use('/', oauthRouter);
app.use('/', oauthFbRouter);
app.use('/', gameRouter);
app.use('/',esewaRouter);
app.use('/swiper',swiper)

// The 404 Route
app.use('*', function (req, res, next) {
  res.status(404).send({ 'message': 'Requested resource doesn\'t exist' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ 'message': 'Something went wrong in Server' });
});

// Start Server
const port = process.env.PORT || 3000; // Use a default port if not specified
const serverIpAddress = 'localhost' || '192.168.1.89'; // Replace with your server's IP address

server.listen(port, serverIpAddress, () => {
  console.log(`Server is running on http://${serverIpAddress}:${port}`);
});

