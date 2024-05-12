const { default: mongoose } = require('mongoose');


module.exports = class User{
    
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    save(){
        var crypto = require('crypto');
        var hashPassword = crypto.createHash('sha256').update(this.password).digest('hex');
        require('dotenv').config()
        mongoose.connect(process.env.MONGO_URL)
        const userSchema = mongoose.Schema(
            {username:
                {type:String,
                required:true}
            ,password:{
                type:String,
                required:true
            }})
        const user = mongoose.model('Users',userSchema);
        const newUser = new user({username:this.username,password:hashPassword});
        newUser.save();
    }

}
