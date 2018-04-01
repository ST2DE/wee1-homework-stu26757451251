
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/views'));

app.get('/api/query',function(req,res){
  res.json(req.query);
})

app.set('view engine','ejs');

app.get('/about',function(req,res){
    res.render('home',{
      name:req.query.name
    });
});







app.listen(3000,function(){
  console.log("I'm listening to 3000 port.");
})

