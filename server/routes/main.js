const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const useragent = require('express-useragent');
const Guest = require('../models/guest');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/", (req, res) => {
    res.render("index", { title: "Home", message: "Willkommen bei meiner Website!" });
});
router.get("/ummelden", async (req, res) => {
    res.render("ummelden", { title: "Ummelden" });
});
router.get("/abmelden", async (req, res) => {
    res.render("abmelden", { title: "Abmelden" });
});
router.post("/createNewEntry", async (req, res) => {
    try {
        const { name, lastName, telnum, people, peopleinfo1, peopleinfo2, peopleinfo3, peopleinfo4, help, helpnot, all,veget,vegan,alerg,spezi, arrival, parkplatz, things } = req.body;
        console.log(req.body);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
});
router.post("/updateEntry", async (req, res) => {
    try {
        const {  people, help, helpnot, arrival, parkplatz, things, id } = req.body;
        console.log(req.body);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
});
router.post("/deleteEntry", async (req, res) => {
    try {
        const { id } = req.body;
        console.log(req.body);
        res.send(true);
    } catch (error) {
        res.send(false);
    }
});
module.exports = router;