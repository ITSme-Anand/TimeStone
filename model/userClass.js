const { default: mongoose } = require('mongoose');


module.exports = class User{
    
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    save(){
        var crypto = require('crypto');
        var hashPassword = crypto.createHash('sha256').update(this.password).digest('hex');      
        const userModel = require('./userModel');
        const newUser = new userModel({username:this.username,password:hashPassword});
        newUser.save();
    }

}
