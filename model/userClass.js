const { default: mongoose } = require('mongoose');
const userModel = require('../model/userModel.js');


module.exports = class User{
    
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    static hashpass(password){
        var crypto = require('crypto');
        var hashPassword = crypto.createHash('sha256').update(password).digest('hex');
        return hashPassword;
    }
    save(){
        var hashPassword = User.hashpass(this.password);     
        const userModel = require('./userModel');
        const newUser = new userModel({username:this.username,password:hashPassword});
        newUser.save();
    
    }

    static async getUser(username,password){
        var usr = await userModel.findOne({username:username});
        if(usr){
            var hashPassword = this.hashpass(password);
            if(usr.password == hashPassword){
                return {status:'correct password',usernam:username};}
            return {status:'wrong password'};
        }
        if(!usr){
            return {status:'user does not exist'};
        }
        }

}
