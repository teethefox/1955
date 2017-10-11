var mongoose = require('mongoose');
// We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
module.exports = {
 show: function(req, res){
     User.find({}, function(err, results){       
          console.log("user")

     res.json({users: results})
})
},
 showsingle: function(req, res){
 User.find({ name: req.params.name }, function(err, results) {
   res.json({ users: results });
 })
},

// Add User Request 
add: function(req, res){
console.log("POST DATA", req.params.name);
var user= new User({name:req.params.name});
    
     user.save(function(err, results){
 if(err) { console.log(err); }
 // This is where we would add the user from req.body to the database.
 res.redirect('/');
})
},

destroy: function(req, res){
     console.log('die');
 User.remove({name:req.params.name}, function(req, err){
     if(err){console.log(err);}
     res.redirect('/')
 })
}
}