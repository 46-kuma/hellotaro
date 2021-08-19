const express = require('express')
var mysql = require('mysql')
const app = express()

//ここを追加=============================
const connection =
   mysql.createConnection({
      host:'us-cdbr-east-04.cleardb.com',
      user:'b3973b93584d55',
      password:'32dbc54e',
      database:'heroku_a1c5590b8bde516'
   });
//============================================

var port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
//ここを追加===================================================
connection.query('SELECT * FROM test',(error,results)=>{
    res.send('hello'+results[0].name+':'+results[0].text);
      console.log(results)
      console.log(results[0])
      console.log(results[0].name)
      console.log(results[0].text)
  })
//===============================================
//      res.send('helloえくすぷれす');
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))