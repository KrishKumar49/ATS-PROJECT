const express = require('express');
const router = express.Router();
const reportController = require('../controller/report.controller');

router.get('/time-to-hire', reportController.getTimeToHireReport);
router.get('/applicant-progress', reportController.getApplicantProgressReport);
router.get('/open-positions', reportController.getOpenPositionReport);
router.get('/hiring-efficiency', reportController.getHiringEfficiencyReport);
module.exports = router;