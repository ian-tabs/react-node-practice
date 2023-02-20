const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ];
    res.json(users);
});

module.exports = router;