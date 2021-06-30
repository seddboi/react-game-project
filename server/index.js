const express = require("express");

const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./routes');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 5000;

const app = express();

//sessions setup
const sess = {
    secret: 'Game_secret',
    cookie: {},
    resave: true,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

app.use(session(sess));
app.use(express.static('public/'));  
app.use(express.json());
app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});