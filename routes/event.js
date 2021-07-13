const router = require("express").Router();
const User = require("../models/User");
const Event = require("../models/Event");

// create new event
router.post("/add", (req, res, next) => {
    const {
        title,
        description, 
        category,
        street,
        houseNumber,
        postalCode,
        city,
        startTime,
        duration,
        specificDate,
        weekday,
        period,
        occurence,
        createdBy
    } = req.body;
    Event.create({
        title: title, 
        description: description,
        category: category,
        location: {street, houseNumber, postalCode, city},
        time: {startTime, duration},
        specificDate: specificDate,
        frequency: {weekday: weekday, period: period, occurence: occurence},
        createdBy: createdBy
    })
    .then(createdEvent => res.status(200).json(createdEvent))
    .catch(error => res.json(error))
});

// edit event
router.put("/edit/:eventid", (req,res,next) => {
    const {
        title,
        description, 
        category,
        street,
        houseNumber,
        postalCode,
        city,
        startTime,
        duration,
        specificDate,
        weekday,
        period,
        occurence,
        createdBy
    } = req.body;
    Event.findByIdAndUpdate(
        req.params.eventid,
        {
        title: title, 
        description: description,
        category: category,
        location: {street, houseNumber, postalCode, city},
        time: {startTime, duration},
        specificDate: specificDate,
        frequency: {weekday: weekday, period: period, occurence: occurence},
        createdBy: createdBy
        },
        {new: true}
    )
    .then(updatedEvent => res.status(200).json(updatedEvent))
    .catch(error => res.json(error))
});

// get all event
router.get("/overview", (req, res, next) => {
    Event.find()
    .then(response => res.status(200).json(response))
})

// delete event
router.delete("/delete/:eventid", (req, res, next) => {
    Event.findByIdAndDelete(req.params.eventid)
    .then(() => res.status(200).json({message: "The event was deleted."}))
    .catch(error => res.json(error))
});

// add event to favourites

// delete event from favourites

module.exports = router;
