var express = require('express');
var router = express.Router();
var QUESTION = require('../models/Question');

router.get('/api/question', (req, res)=>{
    QUESTION.GETALL(true, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.get('/api/question/:id', (req, res)=>{
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    }
    QUESTION.GET(req.params.id, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.get('/api/questions/:id', (req, res)=>{
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    }
    QUESTION.GetByQuiz(req.params.id, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.post('/api/question', (req, res)=>{
    var _quesion = {
        question: req.body.question, 
        FK_quizid: req.body.quiz_id,
        is_mandatory: req.body.is_mandatory ? req.body.is_mandatory : false,
        ans1: req.body.ans1,
        ans2: req.body.ans2,
        ans3: req.body.ans3,
        correct_ans: req.body.correct_ans,
    };

    QUESTION.ADD(_quesion, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.patch('/api/question/:id', (req, res)=>{
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    }
    var params = {...req.body, id:req.params.id}
    QUESTION.UPDATE(params, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.delete('/api/question/:id', (req, res)=>{
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    }
    QUESTION.DELETE(req.params.id, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

module.exports = router;