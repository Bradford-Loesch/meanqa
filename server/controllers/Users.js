var mongoose = require('mongoose'),
    User = mongoose.model('User');

function Users() {
    create = function(user, callback) {
        var userInstance = new User();
        userInstance.name = user.name;
        userInstance.save(function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("Succesfully saved item");
            }
        });
        console.log(userInstance);
        return userInstance;
    }
    this.index = function(req, res) {
        User.findOne({name: req.body.name}, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                if (user === null) {
                    var newUser = create(req.body);
                    res.json(newUser);
                } else {
                    res.json(user);
                }
            }
        });
    }
}

module.exports = new Users();
