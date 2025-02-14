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
    res.render("ummelden", { title: "Ummelden", guest: null, reportUserCreds: ""});
});
router.get("/abmelden", async (req, res) => {
    Guest.find({})
    .then((guests) => {
    res.render("abmelden", { title: "Abmelden",guests: guests, sucess: false, id: '' });
    });
});
router.post("/createNewEntry", async (req, res) => {
    try {

        var { name, lastName, telnum, people, peopleinfo1, peopleinfo2, peopleinfo3, peopleinfo4, help, helpnot, all,veget,vegan,alerg,spezi, arrival, parkplatz, things, schlafplatz, selection,salat,getränk,baguette,snacks,spiel,anderes,tsatsiki,abbau,anderesInput,salatInput  } = req.body;
        console.log(selection);
        var peopleinfo =[]
        var helpp = [false]
        if(salat === "on"){helpp.push(["salat", salatInput])}
        if(getränk === "on"){helpp.push("getränk")}
        if(baguette === "on"){helpp.push("baguette")}
        if(snacks === "on"){helpp.push("snacks")}
        if(spiel === "on"){helpp.push("spiel")}
        if(anderes === "on"){helpp.push(["anderes", anderesInput])}
        if(tsatsiki === "on"){helpp.push("tsatsiki")}
        if(abbau === "on"){helpp.push("abbau")}

        var disorder = [false,false,false,false,false]
        const arrivall = new Date("2024-01-28"); //hier noch das richtige datummfestlegen
        const [hours, minutes] = arrival.split(":").map(Number); 
        if(hours == 0 && minutes == 0){
            arrivall.setHours(0, 0, 0, 0);
        }else{arrivall.setHours((hours-1), minutes, 0, 0); }


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
        const { telnum, people, peopleinfo1, peopleinfo2, peopleinfo3, peopleinfo4, help, helpnot, arrival, parkplatz, things, schlafplatz, guestDB_id  } = req.body;
        var peopleinfo =[]
        var helpp = [false]
        const arrivall = new Date("2024-01-28"); //hier noch das richtige datummfestlegen
        const [hours, minutes] = arrival.split(":").map(Number);
        if(hours == 0 && minutes == 0){
            arrivall.setHours(0, 0, 0, 0);
        }else{arrivall.setHours((hours-1), minutes, 0, 0); }
        if(peopleinfo1){peopleinfo.push(peopleinfo1)}
        if(peopleinfo2){peopleinfo.push(peopleinfo2)}
        if(peopleinfo3){peopleinfo.push(peopleinfo3)}
        if(peopleinfo4){peopleinfo.push(peopleinfo4)}
        if(help != undefined){helpp[0] = true}
        await Guest.findOneAndUpdate({ id: guestDB_id }, {
            telnum: telnum,
            people: people,
            peopleinfo: peopleinfo,
            help: helpp,
            arrival: arrivall,
            parking: parkplatz == "on" ? true : false,
            schlafplatz: schlafplatz == "on" ? true : false,
            message: things,
        }, { new: true });

        res.send(true);
    } catch (error) {
        res.send(false);
    }
});
router.post("/deleteEntry", async (req, res) => {
    try {
        const { vorname, nachname } = req.body;
        var guestToAbmelden = await Guest.findOne({ "name.0": vorname, "name.1": nachname, "name.2": false });
        if(guestToAbmelden == null){
            res.redirect("/?message=Gast nicht gefunden");
            return;
        }
        Guest.find({})
        .then((guests) => {
            res.render("abmelden", { title: "Abmelden",guests: guests, sucess: false, id: guestToAbmelden.id });
            return;
        });
    } catch (error) {
        res.redirect("/");
    }
});
router.post("/deleteEntryFinal", async (req, res) => {
    try {
        const { guestDB_id } = req.body;
        await Guest.findOneAndUpdate({ id: guestDB_id }, {
            "name.2": true
        }, { new: true })
        .then((guest) => {
            if(guest != null){
                res.send(true);
            }else{
                res.send(false);
            }
        });
    } catch (error) {
        res.redirect("/?message=Fehler beim Abmelden des Gastes");
        console.log(error);
    }
});
router.post("/getUserCreds", async (req, res) => {
    try {
        const { vorname, nachname  } = req.body;
        Guest.findOne({ "name.0": vorname, "name.1": nachname, "name.2": false })
        .then((guest) => {
            if(guest != null){
                if(guest.name[2] == false){
                    res.render("ummelden", { title: "UserCreds", guest: guest, reportUserCreds: "" });
                }else{
                    res.render("ummelden", { title: "UserCreds", guest: guest, reportUserCreds: "Gast Abgemeldet" });
                }
            }else{
                res.render("ummelden", { title: "UserCreds", guest: null, reportUserCreds: "Gast nicht gefunden" });
            }
        });
    } catch (error) {
        res.render("ummelden", { title: "UserCreds", guest: null, reportUserCreds: "Fehler beim finden des Gastes" });
    }
});

module.exports = router;