const express = require('express'),
    router = express.Router(),
    { list, insert, update, remove } = require('../controllers/transactions');

/* GET transactions listing. */
router
    .get('/', list)
    
    .post('/', insert)

    .put('/:id', update)

    .delete('/:id', remove)

module.exports = router;
