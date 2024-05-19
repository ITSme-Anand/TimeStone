const { default: mongoose } = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);
const userSchema = mongoose.Schema(
    {username:
        {type:String,
        required:true}
    ,password:{
        type:String,
        required:true
    }})
const user = mongoose.model('Users',userSchema);
module.exports = user;