const router = require("express").Router();
const session = require("express-session")

const {User} = require("../../models");
const bcrypt = require("bcrypt")


const saltRounds = 10;

  router.post("/register",  async (req, res) => {
    // console.log("HITTING API USERS POST", req);
    try {
      // bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const newUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password//hash,
        });
      // })

      // console.log(newUserData);  
      res.send("200");
      res.status(200)
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });


router.get("/login", (req, res) => {
  try{
    // console.log(req.session)
    // res.send(req.session.user)
    if (req.session.userId) {
      res.send({ loggedIn: true, user: req.session.userId });
    } else {
      res.send({ loggedIn: false });
    }
  } catch (err) {
    res.status(500).json(err);

  }
});

router.get("/logout", (req, res) => {
  try{
    if(req.session.userId){
      req.session.destroy((err) => {
        if(err){
          console.log(err);
        }else {
          console.log(session)
        }
      })
    }
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: {
          email: req.body.email
        } 
     });

    const user = userData.get({ plain: true });
     console.log(user)
    if(user){
      bcrypt.compare(req.body.password, user.password, (error, response) => {
        // console.log(user.id)
        if (response){
          req.session.userId = user;
          console.log(req.session.userId)
          res.send("200");
          res.status(200);
          // return;
        } else {
          // res.send({message: "Wrong password or username! "})
          res.status(500).send({message: "Wrong password or username! "});
        }
      })
    } 
    // else {
      
    // }
    // else {
    //   res.status(500).send({message: "User doesn't exist!"})
    // }

    // console.log(user);
    // res.send("work")
    // console.log("userData", userData);
    // if (!user) {
    //   console.log("work")
      // res
      //   .status(400)
      //   .json({ message: "Incorrect email or password, please try again" });
      // return;
    // }

    // const validPassword = await userData.checkPassword(req.body.password);
    // console.log(validPassword)
    // if (user.password !== req.body.password) {
    //   // console.log('wrong pass')
    //   res
    //     .status(400)
    //     .json({ message: "Incorrect email or password, please try again" });
    //   return;
    // }

    // req.session.loggedIn = true;
    // req.session.user_id = user.id;
    // res.send("200");
    // res.status(200); //.json(userData);
    // res.send("login work")
  } 
  catch (err) {
    // console.log(err)
    // res.send({message: "User doesn't exist!"})
    res.status(500).send({message: "User doesn't exist!"});
  }
});


router.get('/:id/chars', async(req, res) => {
  try {
      const userChars = await UserChar.findAll({where: {user_id: req.params.id}});
      res.status(200).json(userChars);
  } catch (err) {
      res.status(500).json(err);
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
