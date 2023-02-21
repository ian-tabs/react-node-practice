const express = require('express');
const router = express.Router();

const User = require('../classes/User');
const idGenerator = require('../utils/idGenerator');

const getNextId = () => idGenerator().next().value;

router.get('/', (req, res) => {
    const users = [
        new User({ id: getNextId(), firstName: 'John', lastName: 'Doe' }),
        new User({ id: getNextId(), firstName: 'Jane', lastName: 'Doe' }),
        new User({ id: getNextId(), firstName: 'Bob', lastName: 'Smith' }),
    ];
    // const userNames = users.map(user => user.getFullName());
    res.json(users);
});

module.exports = router;