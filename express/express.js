
const express = require('express');
const app = express();


app.get('/api/query',function(req,res){
  res.json(req.query);
})

app.set('view engine','ejs');

app.get('/about/:name',function(req,res){
    res.render('about',{
      name:req.query.name
    });
});

app.get('/about',function(req,res){
    res.render('about',{
      name:"there"
    });
});





app.listen(3000,function(){
  console.log("I'm listening to 3000 port.");
})

