const db = require('../models/model.js');

const usersController = {};

usersController.getUserData = (req, res, next) => {
  const UID = req.params.user_id;

  // get user's personal data
  const getUserData = 'SELECT * FROM job_seekers WHERE id = $1';

  db.query(getUserData, [UID]) // array of variables to use in query
    .then((data) => {
      res.locals.userData = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: 'usersController.getUserData: ERROR: Error getting database',
        message: {
          err: 'usersController.getUserData: ERROR: Check database for details',
        },
      });
    });
};

usersController.addUser = (req, res, next) => {
  const { first_name, last_name, email, password, cur_salary, DOB } = req.body;
  const addUser =
    'INSERT INTO job_seekers (first_name, last_name, email, password, cur_salary, DOB) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

  db.query(addUser, [first_name, last_name, email, password, cur_salary, DOB])
    .then((data) => {
      // return something?
      console.log('data from addUser:', data);
      res.locals.userId = data.rows[0].id;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'usersController.addUser: ERROR: Error writing to database',
        message: {
          err: 'usersController.addUser: ERROR: Check database for details',
        },
      });
    });
};

// usersController.editUser = (req, res, next) => {

// };

// usersController.deleteUser = (req, res, next) => {
//     // delete all apps and all steps
// };

module.exports = usersController;
