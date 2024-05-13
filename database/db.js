
module.exports = class db{
    constructor(model){
        this.model = model;
    }
    async getUser(username){
        var usr = await this.model.findOne({username:username});
        return usr;
        }
    
    }