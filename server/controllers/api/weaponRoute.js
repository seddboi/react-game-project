const router = require("express").Router();
const {Weapon} = require("../../models");

router.get('/lootweapon', async(req, res) => {
    try {
        const lootData = await Weapon.findAll();
        res.status(200).json(lootData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;