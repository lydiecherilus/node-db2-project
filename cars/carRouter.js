const express = require('express');
const db = require('../data/config')

const router = express.Router();

// get all cars
router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve cars' });
        });
});


// get a car by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars').where({ id }).first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to retrieve car' });
        });
});


// create a car
router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({ id: ids[0] })
                .then(newCarEntry => {
                    res.status(201).json(newCarEntry);
                });
        })
        .catch(error => {
            console.log('POST error', error);
            res.status(500).json({ message: "Failed to store car in the database" });
        });
});


// update a car 
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const payload = await db("cars").where("id", id).update(req.body)
        res.status(200).json({ "updated": (req.body) })
    } catch (error) {
        next(error)
    }
})


// delete a car
router.delete('/:id', async (req, res, next) => {
    try {
        await db("cars").where("id", req.params.id).del()
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})

module.exports = router;