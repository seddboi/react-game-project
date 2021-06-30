const router = require("express").Router();
const session = require("express-session")
const { User } = require("../models");
// /api/users/

router.post("/", async (req, res) => {
  
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(dbUserData);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
      req.session.onboarded = false;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {


  try {
    const userData = await User.findOne( { 
        where: {
             email: req.body.email
             } ,
       include: { model :  Preferences }
     });
    const user = userData.get({ plain: true });
    console.log("user", user);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    
      req.session.loggedIn = true;
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    


  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/id', async(req, res) => {
    try {
        const userData = await User.findAll();
        const users = userData.map((user) => user.get({plain: true}))

        if (!userData) {
            res.status(404).json({ message: 'No Preferences found!' });
            return;
        } console.log(users)
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;