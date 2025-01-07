const pool = require('../../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM students", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const updateStudents = (req, res) => {
    const { id, email } = req.body;
    pool.query(
        "UPDATE students SET email = $1 WHERE id = $2",
    [email, id],
    (error, results) => {
        if(error) throw error;
        res.status(200).send(`Student modified with ID: ${id}`);
    }
    );
};

module.exports = {
    getStudents,
    updateStudents,
};