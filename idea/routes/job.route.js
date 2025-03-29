const express = require('express');
const router = express.Router();
const JobController = require('../controller/job.controller');

//GET requests
router.get('/get-job/:id', JobController.getJob);
router.get('/all-jobs', JobController.allJob);
router.get('/', JobController.GetAllJobs);
router.get('/byId/:id', JobController.GetJobFromID);
// router.get('/get-job', JobController.getJob);

//POST requests
router.post('/', JobController.createJob);

//PUT requests
router.put('/update/:id', JobController.updateJob);

//DELETE requests
router.delete('/delete/:id', JobController.deleteJob);


module.exports = router;
