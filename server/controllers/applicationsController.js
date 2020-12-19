const db = require('../models/model.js');

const applicationsController = {};

applicationsController.getAllApps = (req, res, next) => {
  const UID = req.params.user_id;
  // get user's personal data
  const getAppData = 'SELECT * FROM applications WHERE job_seeker_id = $1';
  db.query(getAppData, [UID]) // array of variables to use in query
    .then((data) => {
      res.locals.userData = data.rows;
      console.log(data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log:
          'applicationsController.getUserData: ERROR: Error getting database',
        message: {
          err:
            'applicationsController.getUserData: ERROR: Check database for details',
        },
      });
    });
};

applicationsController.addApp = (req, res, next) => {
  const UID = req.params.user_id;

  const {
    company,
    job_title,
    how_applied,
    date_applied,
    location,
    found_by,
    notes,
    app_status,
  } = req.body;

  const addApp =
    'INSERT INTO applications (job_seeker_id, company, job_title, how_applied, date_applied, location, found_by, notes, app_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';

  db.query(addApp, [
    UID,
    company,
    job_title,
    how_applied,
    date_applied,
    location,
    found_by,
    notes,
    app_status,
  ])
    .then((data) => {
      console.log(data.rows);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'applicationsController.addApp: ERROR: Error writing to database',
        message: {
          err:
            'applicationsController.addApp: ERROR: Check database for details',
        },
      });
    });
};

// "id" serial NOT NULL,
// "job_seeker_id" integer NOT NULL,
// "company" varchar(255) NOT NULL,
// "job_title" varchar(255) NOT NULL,
// "how_applied" varchar(255),
// "date_applied" DATE,
// "location" varchar(255),
// "found_by" varchar(255) NOT NULL,
// "notes" varchar(255),
// "app_status" integer NOT NULL,
applicationsController.deleteApp = () => {};

applicationsController.editApp = () => {};

module.exports = applicationsController;
