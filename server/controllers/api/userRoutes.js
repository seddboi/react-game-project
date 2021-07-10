const router = require("express").Router();
const session = require("express-session")
const {User} = require("../../models");


  router.post("/register", async (req, res) => {
    console.log("HITTING API USERS POST", req);
    try {
      const newUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      console.log(newUserData);
  
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/login", async (req, res) => {


  try {
    const userData = await User.findOne( { 
        where: {
             email: req.body.email
             } 
     });
    const user = userData.get({ plain: true });
    console.log("user", user);
    // console.log("userData", userData);
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

module.exports = router;
