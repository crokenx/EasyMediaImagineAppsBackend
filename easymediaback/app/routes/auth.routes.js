const router = require("express").Router();

const auth = require("../controllers/auth.controller.js");

router.route('/registration').post((req, res) => {
    try {
        auth.create(req, res);
    } catch (error) {
        res.status(500).send({
            message:
            error.message || "Some error occurred while creating the user."
        }); 
    }
});

router.route('/login').post((req, res) => {
    try {
        auth.login(req, res);
    } catch (error) {
        res.status(500).send({
            message:
            error.message || "Some error occurred while login the user."
        }); 
    }
});

module.exports = router;