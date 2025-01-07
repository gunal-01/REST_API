const { Router } = require('express');
const controller = require('./controller');
const router =  Router();

router.get("/", controller.getStudents);
router.post("/", controller.updateStudents);

module.exports = router;