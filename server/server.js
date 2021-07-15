const express = require("express");
const cors = require("cors");
const session = require("express-session");
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 3001;

const app = express();
const sess = {
  secret: 'game_secret',
  cookie: {},
  resave: true,
  saveUninitialized: false,
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
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});