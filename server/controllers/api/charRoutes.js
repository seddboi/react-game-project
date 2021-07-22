const router = require("express").Router();
const { response } = require("express");
const session = require("express-session");
const {User, UserChar, Weapon} = require("../../models");

router.post('/newchar', async(req, res)=> {
    
    try {
        await UserChar.create(
        //     {
        // where: 
        {user_id: req.session.user_id}
        // }
        )
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

router.put('/save/:id', async(req, res) => {
    try {
        
        await UserChar.update ({
            xp: req.body.xp,
            health: req.body.health,
            level: req.body.level,
            weapon_id: req.body.weapon_id
        }, {where: {id: req.body.id}}) 
    }catch (err) {
        res.status(400).json(err);
    }
});

router.get('/load/:id', async(req, res) => {
    console.log(req.params.id);
    try{
        const userCharData = await UserChar.findByPk(req.params.id, {
        include: [{
            model: Weapon,
            attributes: [
                'name',
                'damage',
                'isVampiric',
                'isParalysis',
                'isPoison',
                'desc'
            ],
        }, ],
        });
        const userChar = userCharData.get({plain: true});
        if(!userCharData){
            res
            .status(400)
            .json({message: "No character associated"})
        }else {
            res.json(userChar)
        }
        
    }catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/user/:id', async(req, res) => {
    // try{
        const userSavesData = await UserChar.findAll({where: {user_id: req.params.id}})
        // .then((response) => {
        //     console.log(response)
        // })
        let chars = [];
        userSavesData.map((data) => {
            chars.push(data.dataValues)
            // console.log(data.dataValues)
        })
        // console.log(userSavesData[0].dataValues)
        // console.log(userSavesData.user_chars)
        // console.log(userSavesData.user_chars.dataValues)
        // console.log(userSavesData.dataValues)
        // console.log(userSaves)
        // console.log(userSaves)
        res.status(200).send(chars)
    // } catch (err) {
    //     res.status(500).send(err)
    // }
});

    router.get('/test', async(req, res) => {
        res.json({message: "test"})
    });
 module.exports = router;
