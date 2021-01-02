const router = require('express').Router();
let Interaction = require('../models/interaction.model');

router.route('/').get((req, res) => {
    Interaction.find()
        .then(interactions => res.json(interactions))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to add
router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const questionId = req.body.questionId;
    const selectedOptionIds = req.body.selectedOptionIds;
    const entryTimeStamp = req.body.entryTimeStamp;
    const exitTimeStamp = req.body.exitTimeStamp;

    const newInteraction = new Interaction({
        userId, questionId, selectedOptionIds, entryTimeStamp, exitTimeStamp
    });

    newInteraction.save()
        .then(() => res.json('Interaction added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to get by id
router.route('/:id').get((req, res) => {
    Interaction.findById(req.params.id)
        .then(interaction => res.json(interaction))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
    Interaction.findByIdAndDelete(req.params.id)
        .then(() => res.json('Interaction deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    Interaction.findById(req.params.id)
        .then(interaction => {
            interaction.userId = req.body.userId;
            interaction.questionId = req.body.questionId;
            interaction.selectedOptionIds = req.body.selectedOptionIds;
            interaction.entryTimeStamp = req.body.entryTimeStamp;
            interaction.exitTimeStamp = req.body.exitTimeStamp;
            interaction.save()
                .then(() => res.json('Interaction updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;