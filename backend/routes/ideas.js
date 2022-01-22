const router = require('express').Router();
let Idea = require('../models/idea.model');

router.route('/').get((req,res) => {
    Idea.find()
    .then(ideas => res.json(ideas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    //const date = Date.parse(req.body.date);

    const newIdea = new Idea({
        username,
        description,
       // date,
    });

    newIdea.save()
    .then(() => res.json('Idea added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
    Idea.findById(req.params.id)
    .then(idea => res.json(idea))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Idea.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Idea Deleted.'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Idea.findById(req.params.id)
    .then(idea => {
        idea.username = req.body.username;
        idea.description = req.body.description;

        idea.save()
        .then(() => res.json('Idea updated!'))
        .catch(err => res.status(400).json('Error: '+err));
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;