const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const useragent = require('express-useragent');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/", (req, res) => {
    res.render("index", { title: "Home", message: "Willkommen bei meiner Website!" });
});


module.exports = router;