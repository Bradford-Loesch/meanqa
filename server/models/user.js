var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);
