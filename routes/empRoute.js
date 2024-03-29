const express = require('express');
const empRouter = express.Router();
const empCtrl = require('../controllers/empCtrl');

empRouter.post('/register',empCtrl.register);
empRouter.post('/login',empCtrl.login);
empRouter.get('/logout',empCtrl.logout);
empRouter.get('/all',empCtrl.employees);
empRouter.get('/whoami', empCtrl.whoAmI)
empRouter.get('/:id',empCtrl.employee);
empRouter.delete('/delete/:id',empCtrl.delete);
empRouter.put('/update/:id', empCtrl.update);
empRouter.put('/addreviwer', empCtrl.addReviewParticipant);
empRouter.delete('/participant/:id', empCtrl.removeReviewParticipant);;


module.exports = empRouter;
