var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955');
var UserSchema = new mongoose.Schema({
    name: String,
   })
   // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User', UserSchema);