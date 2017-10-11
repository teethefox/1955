var old = require('../controllers/users.js');
module.exports = function(app) {
    
    


app.get('/', function(req, res) {  
old.show(req,res)   
 })
app.get('/:name', function(req, res){
    old.showsingle(req, res)
  })
  
app.get('/new/:name/', function(req, res){
 old.add(req, res)
})

app.get('/remove/:name', function(req, res){
 old.destroy(req, res)
})
}