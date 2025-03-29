const express = require('express');
const router = express.Router();
const candiController = require('../controller/candi.controller');


// Get Requests
router.get('/', candiController.getCandidate)
router.get('/find/:id', candiController.findCandidate)
router.get('/search', candiController.searchCandidates)
router.get('/test',  candiController.candidates)
router.get('/allCandidates', candiController.allCandidates);
router.get('/candidateForActivity/candidates', candiController.candidateForActivity);
router.get('/getAdminCandidate', candiController.getAdminCandidate);

// Post Requests
// router.post('/add/:name/:email/:status/:appliedAt/:appliedFor/:resume', candiController.addCandidate);
router.post('/add', candiController.addCandidate);


// Put Requests
router.put('/update/:id', candiController.UpdateCandidates);

// Delete Requests
router.delete('/delete/:id', candiController.deleteCandidate);


module.exports = router;