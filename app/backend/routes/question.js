const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to add
router.route('/add').post((req, res) => {
    const text = req.body.text;
    const ImgUrl = req.body.imgUrl;
    const options = req.body.options;
    const tags = req.body.tags;
    const subject = req.body.subject;
    const chapter = req.body.chapter;
    const difficulty = req.body.difficulty;

    const newQuestion = new Question({
        text, ImgUrl, options, tags, subject, chapter, difficulty
    });

    newQuestion.save()
        .then(() => res.json('Question added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to get by id
router.route('/:id').get((req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
        .then(question => {
            question.text = req.body.text;
            question.ImgUrl = req.body.imgUrl;
            question.options = req.body.options;
            question.tags = req.body.tags;
            question.subject = req.body.subject;
            question.chapter = req.body.chapter;
            question.difficulty = req.body.difficulty;

            question.save()
                .then(() => res.json('Question updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;