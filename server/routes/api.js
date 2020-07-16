const express = require('express');
const router = express.Router();

router.get('/courses', function (req, res) {
    let sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/student_info', function (req, res) {
    let sql = 'SELECT * FROM student_info';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/course_registration', function (req, res) {
    let sql = 'SELECT * FROM courses';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;