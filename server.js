var express = require('express');
var app = express();
var QuizController = require('./controllers/QuizController');
var QuestionController = require('./controllers/QuestionController');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(QuizController);
app.use(QuestionController);

app.get('/', (req,res)=>{
   res.send('Server Running ...');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})