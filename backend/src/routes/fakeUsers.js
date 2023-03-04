const express = require('express');
const router = express.Router();

const User = require('../classes/User');
const idGenerator = require('../utils/idGenerator');

// TODO: fix this
const getNextId = () => idGenerator().next().value;

router.get('/', (req, res) => {
    // sample stuff
    const users = [
        new User({ id: 1, firstName: 'John', lastName: 'Doe' }),
        new User({ id: 2, firstName: 'Jane', lastName: 'Doe' }),
        new User({ id: 3, firstName: 'Bob', lastName: 'Smith' }),
    ];
    // const userNames = users.map(user => user.getFullName());
    res.json(users);
});

module.exports = router;