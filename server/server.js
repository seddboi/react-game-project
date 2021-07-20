const express = require("express");
const cors = require("cors");
const session = require("express-session");
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 3001;

const app = express();
const sess = {
  secret: 'game_secret',
  saveUninitialized: false,
  resave: true,
  cookie: {
    httpOnly: true,
    maxAge: 1800000,
    sameSite: 'strict'
  },
  
  
  store: new SequelizeStore({
      db: sequelize
  })
};

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(session(sess));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.session)
  next()
})


app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});