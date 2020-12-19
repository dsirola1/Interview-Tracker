const express = require('express');
const stepsController = require('../controllers/stepsController');

const router = express.Router({ mergeParams: true });

// starts at /:app_id/step
// get all steps for this application id
router.get('/', stepsController.getAllSteps, (req, res) =>
  res.status(200).json({ hi: 'again' })
);

// add new step
router.post('/', stepsController.addStep, (req, res) => {
  res.status(200).json({});
});

// edit step
router.put('/:step_id', stepsController.editStep, (req, res) => {
  res.status(200).json({});
});

// delete step
router.delete('/:step_id', stepsController.deleteStep, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
