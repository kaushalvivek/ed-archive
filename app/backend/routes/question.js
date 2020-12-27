const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to add
router.route('/add').post((req, res) => {
    const ImgUrl = req.body.imgUrl;
    const questionText = req.body.questionText;
    const options = req.body.options;
    const metadata = req.body.metadata;

    const newQuestion = new Question({ ImgUrl, questionText, options, metadata });

    newQuestion.save()
        .then(() => res.json('Question added!'))
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
            user.username = req.body.username;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;