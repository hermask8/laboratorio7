const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


router.get('/:password', (req, res) => {
    const token = jwt.sign(req.body, req.params.password, (err, token) => {
         res.json({token});
});
});







module.exports = router;