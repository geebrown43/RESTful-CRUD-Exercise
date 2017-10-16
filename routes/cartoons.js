var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
let db = require('../db/query')
// Create the route for get all
router.get('/', (req, res, next) => {
    db.getAll()
    .then(cartoons => res.json(cartoons) )
    .catch(err => next(err));
})

// Create the route for get one
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    db.getOne(id)
    .then(cartoon => res.json(cartoon))
    .catch(err => next (err))
})

// Create the route for creating an item

router.post('/', (req, res, next) => {
    db.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => next(err))
})


// Create the route for updating


// Route for deleting an item


module.exports = router;
