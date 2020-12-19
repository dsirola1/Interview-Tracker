const express = require('express');
const applicationsController = require('../controllers/applicationsController');

const router = express.Router({ mergeParams: true });

const stepRouter = require('../routes/steps');

// get all applications for this user_id
router.get('/', applicationsController.getAllApps, (req, res) => {
  res.status(200).json({ hi: 'there' });
});

// add new app
router.post('/', applicationsController.addApp, (req, res) => {
  res.status(200).json({});
});

// edit app
router.put('/:app_id', applicationsController.editApp, (req, res) => {
  res.status(200).json({});
});

// delete app
router.delete('/:app_id', applicationsController.deleteApp, (req, res) => {
  res.status(200).json({});
});

router.use('/:app_id/step', stepRouter);

module.exports = router;
