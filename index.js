const express = require('express')
var mysql = require('mysql')
const app = express()


var port = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    
      res.send('helloえくすぷれす');
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))