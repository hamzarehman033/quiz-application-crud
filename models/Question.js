var db = require('../db');

exports.ADD = (params, result)=>{
    return db.execute(`INSERT INTO questions(question,FK_quizid, is_mandatory, ans1, ans2, ans3, correct_ans) 
    VALUES ('${params.question}', ${params.FK_quizid}, ${params.is_mandatory}, '${params.ans1}', '${params.ans2}' , '${params.ans3}', '${params.correct_ans}' )`, 
    (error, rows, fields) => {
        console.log(2);
        if (error) {
            result(error)
        } else {
            result(rows);
        }
    });
};

exports.GETALL = (params, result)=>{
    return db.query("SELECT * FROM questions", (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};

exports.GET = (id, result)=>{
    return db.query("SELECT * FROM questions WHERE id ="+id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};
  
exports.GetByQuiz = (id, result)=>{
    return db.query("SELECT * FROM questions WHERE FK_quizid ="+id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};

exports.UPDATE = (params, result)=>{
    return db.query(`UPDATE questions SET 
    question = '${params.question}' , 
    is_mandatory = '${params.is_mandatory}' ,  
    ans1 = '${params.ans1}' ,  
    ans2 = '${params.ans2}' ,  
    ans3 = '${params.ans3}' ,  
    correct_ans = '${params.correct_ans}'
    WHERE id =`+params.id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};
  
exports.DELETE = (id, result)=>{
    return db.query(`DELETE FROM questions WHERE id =`+id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};