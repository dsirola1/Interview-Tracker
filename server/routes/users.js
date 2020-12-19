const express = require('express');
const usersController = require('../controllers/usersController.js');
const applicationRouter = require('../routes/applications');

const router = express.Router();

// get user data at login
router.get('/:user_id', usersController.getUserData, (req, res) => {
  res.status(200).json(res.locals.userData);
});

// add new user
router.post('/', usersController.addUser, (req, res) => {
  res.status(200).json(res.locals.userId);
});

// edit user
// router.put('/:user_id', usersController.editUser, (req, res) => {
//   res.status(200).json({});
// });

// delete
// router.delete('/:user_id', usersController.deleteUser, (req, res) => {
//   res.status(200).json({});
// });

router.use('/:user_id/application', applicationRouter);

module.exports = router;
