// Requires const
const mongoose = require('mongoose');
const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");
const security = require('./app/middlewares/Security.Middleware');
const config = require('./app/config/config.js');

// Initialice and instance app
const app = express();

// Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({ origin: true, credentials: true, headers: true }));

// parse requests of content-type: application/x-www-form-urlencoded
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Define swagger
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// To connect to database
mongoose.set('useCreateIndex', true);

// Welcome route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ABREMEX" });
});

// Import routes files
const userRoutes = require('./app/routes/User.Routes');
const authRoutes = require('./app/routes/Auth.Routes');
const customerRoutes = require('./app/routes/Customer.Routes');

// Use of routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/customers', security.verifyToken, customerRoutes);

// MongoDB Options
const mongoOptions = {
    tlsInsecure: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Use Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to database and start server
mongoose.connect(config.DATABASE_HOST, mongoOptions).then(() => {
    console.log("connected to database");

    //  open server
    app.listen(config.PORT, async() => {
        console.log(`Server running at port ${ config.PORT }`);
    });
}).catch(err => console.log(err));
