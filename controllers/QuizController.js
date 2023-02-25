var express = require('express');
var router = express.Router();
var QUIZ = require('../models/Quiz');

router.get('/api/quiz/:id', (req, res)=> {
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    };
    QUIZ.GET(req.params.id, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.get('/api/quiz', (req, res)=>{
        QUIZ.GETALL(true, (result)=>{
            res.status(200).json(
                {
                    success:true,
                    error: null,
                    data: result
                }
            )
        })
});

router.post('/api/quiz', (req, res)=>{
    if(!req.body.title){
        res.status(400).json(
            {
                success:false,
                error: "invalid fields",
                data: null
            }
        );
        return
    }
    var _quiz = {title: req.body.title, description: req.body.description}
    QUIZ.ADD(_quiz, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.patch('/api/quiz/:id', (req, res)=>{
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
    QUIZ.UPDATE(params, (result)=>{
        res.status(200).json(
            {
                success:true,
                error: null,
                data: result
            }
        )
    })
});

router.delete('/api/quiz/:id',  (req, res)=>{
    if(!req.params.id){
        res.status(400).json(
            {
                success:false,
                error: "Please provide id",
                data: null
            }
        )
    }
    QUIZ.DELETE(req.params.id, (result)=>{
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