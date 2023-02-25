var db = require('../db');

exports.ADD = (params, result)=>{
    return db.execute("INSERT INTO quiz(title,description) VALUES ('" + params.title + "','" + params.description + "')", (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};

exports.GETALL = (param, result)=>{
    return db.query("SELECT * FROM quiz", (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};

exports.GET = (id, result)=>{
  return db.query("SELECT * FROM quiz WHERE id ="+id, (error, rows, fields) => {
      if (error) {
          result(error);
      } else {
          result(rows);
      }
  });
};

exports.UPDATE = (params, result)=>{
    return db.query(`UPDATE quiz SET title = '${params.title}' , description = '${params.description}'  WHERE id =`+params.id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};
  
exports.DELETE = (id, result)=>{
    return db.query(`DELETE FROM quiz WHERE id =`+id, (error, rows, fields) => {
        if (error) {
            result(error);
        } else {
            result(rows);
        }
    });
};