const router = require("express").Router();
const session = require("express-session");
const {User, UserChar, Weapon} = require("../../models");

router.post('/newchar', async(req, res)=> {
    
    try {
        await UserChar.create({
        where: {user_id: req.session.user_id}
        })
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

router.put('/save/:id', async(req, res) => {
    try {
    //    const id = await UserChar.findByPk(req.params.id)
        await UserChar.update ({
            xp: req.body.xp,
            health: req.body.health,
            level: req.body.level,
            weapon_id: req.body.weapon_id
        }, {where: {id: req.params.id}}) 

        res.status(200).json({message: "Save Succesful"});
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

    router.get('/test', async(req, res) => {
        res.json({message: "test"})
    });
 module.exports = router;
