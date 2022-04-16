/*app.js - creating a movie app that lets users add & find movies to their personal list  */

/* first, load all the packages we will need */
const createError = require("http-errors"); // to handle the server errors
const express = require("express");
const path = require("path");  // to refer to local paths
const cookieParser = require("cookie-parser"); // to handle cookies
const session = require("express-session"); // to handle sessions using cookies
const debug = require("debug")("personalapp:server"); 
const layouts = require("express-ejs-layouts");
const axios = require("axios")


/* load the models here - if you have/need models */

/* load the JSON objects here if you have them */

/* initialize the database*/
const mongoose = app.require('mongoose');
const mongoose_URI = 'mongodb+srv://aartijain:liberty312001@cluster0.wzkxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect( mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

const db = mongoose.connection; //connects to the database

/* initialize the express server */
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//specify that the static data will be located in the "public" folder
app.use(express.static(path.join(__dirname, "public")));

/* Authentication */

app.use(
  session({
    secret: "zzbbyanana789sdfa8f9ds8f90ds87f8d9s789fds", // this ought to be hidden in process.env.SECRET
    resave: false,
    saveUninitialized: false
  })
);

// here is the code which handles all /login /signin /logout routes
const auth = require('./routes/auth');
const { deflateSync } = require("zlib");
app.use(auth)

// middleware to test is the user is logged in, and if not, send them to the login page
const isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  }
  else res.redirect('/login')
}



//Routing 
app.get("/", (req, res, next) => {
    res.render("login");
  });

app.get("/new", (req,res,next)=> {
    res.render("new");
});

app.get("/user_homepage", (req, res,next)=>{
  res.render("homepage");

});

app.post("/addMovie", (req,res,next)=>{
  //save to database here
});

