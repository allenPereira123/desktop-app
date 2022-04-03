const path = require('path')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mock.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err)
        return console.error(err.message);
    console.log('connection successful')
})

let sql = `SELECT name FROM student`;

db.all(sql, [], (err,rows) => {
    if (err){
        throw err;
    }

    rows.forEach(row => {
        console.log(row.name)
    })
})

