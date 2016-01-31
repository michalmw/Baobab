var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlowerSchema = new Schema({

    name: String,
    price: Number,
    description: String,
    photo: String

});
// FlowerSchema.pre('save', function(next) {
    // var user = this;
    // if(!user.isModified('password')) return next();
    // bcrypt.genSalt(10, function(err, salt) {

    //     if (err) return next(err);
    //     bcrypt.hash(user.password, salt, null, function(err, hash) {

    //        if (err) return next(err);
    //        user.password = hash;
    //        next();
    //     });
    // });

// });

// FlowerSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// }
module.exports = mongoose.model('Flower', FlowerSchema);