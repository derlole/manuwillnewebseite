const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const useragent = require('express-useragent');
const Guest = require('../models/guest');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/", (req, res) => {
    Guest.find({})
    .then((guests) => {
            res.render("index", { title: "Home", guests: guests, message: req.query.message });
    });
});
router.get("/ummelden", async (req, res) => {
    res.render("ummelden", { title: "Ummelden" });
});
router.get("/abmelden", async (req, res) => {
    res.render("abmelden", { title: "Abmelden" });
});
router.post("/createNewEntry", async (req, res) => {
    try {
        const { name, lastName, telnum, people, peopleinfo1, peopleinfo2, peopleinfo3, peopleinfo4, help, helpnot, all,veget,vegan,alerg,spezi, arrival, parkplatz, things, schlafplatz } = req.body;
        var peopleinfo =[]
        var helpp = [false]
        var disorder = [false,false,false,false,false]
        const arrivall = new Date("2024-01-28"); //hier noch das richtige datummfestlegen
        const [hours, minutes] = arrival.split(":").map(Number); 
        if(hours == 0 || minutes == 0){
            arrivall.setHours(0, 0, 0, 0);
        }else{arrivall.setHours(hours, minutes, 0, 0); }


        if(peopleinfo1){peopleinfo.push(peopleinfo1)}
        if(peopleinfo2){peopleinfo.push(peopleinfo2)}
        if(peopleinfo3){peopleinfo.push(peopleinfo3)}
        if(peopleinfo4){peopleinfo.push(peopleinfo4)}
        if(help != undefined){helpp[0] = true}
        if(all != undefined){disorder[0] = true}
        if(veget != undefined){disorder[1] = true}
        if(vegan != undefined){disorder[2] = true}
        if(alerg != undefined){disorder[3] = true}
        if(spezi != undefined){disorder[4] = true}


        const newGuest = new Guest({
            name: [name, lastName, false],
            telnum: telnum,
            people: people,
            peopleinfo: peopleinfo,
            help: helpp,
            disorders: disorder,
            arrival: arrivall,
            parking: parkplatz == "on" ? true : false,
            schlafplatz: schlafplatz == "on" ? true : false,
            message: things,
            created: new Date(),
            id: Math.random().toString(36).substr(2, 9)
        })
        await newGuest.save();
        res.redirect("/?message=Gast erfolgreich gespeichert");
        //res.send(true);
    } catch (error) {
        res.send({ message: "Fehler beim Speichern des Gastes" });
        console.log(error);
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