const mongoose = require('mongoose')

const guestSchema = new mongoose.Schema({
    name: {
        type: [],
        required: true
    },
    telnum: {
        type: String,
        default: null
    },
    people: {
        type: Number,
        default: 0
    },
    peopleinfo: {
        type: [],
        default: null
    },
    help: {
        type: [],
        default: [false]
    },
    disorders: {
        type: [],
        default: [true,false,false,false,false]
    },
    arrival: {
        type: Date,
        default: null
    },
    parking: {
        type: Boolean,
        default: false
    },
    schlafplatz: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        default: null
    },
    created: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Guest', guestSchema)