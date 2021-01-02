const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to add
router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const gender = req.body.gender;
    const city = req.body.city;
    const school = req.body.school;
    const coaching = req.body.coaching;
    const schoolClass = req.body.schoolClass;
    const coachingBatch = req.body.coachingBatch;
    const targetExam = req.body.targetExam;
    const weeklyHoursCommitted = req.body.weeklyHoursCommitted;

    const newUser = new User({
        email, password, name, gender, city, school, coaching, schoolClass,
        coachingBatch, targetExam, weeklyHoursCommitted
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to get by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.email = req.body.email;
            user.password = req.body.password;
            user.name = req.body.name;
            user.gender = req.body.gender;
            user.city = req.body.city;
            user.school = req.body.school;
            user.coaching = req.body.coaching;
            user.schoolClass = req.body.schoolClass;
            user.coachingBatch = req.body.coachingBatch;
            user.targetExam = req.body.targetExam;
            user.weeklyHoursCommitted = req.body.weeklyHoursCommitted;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;