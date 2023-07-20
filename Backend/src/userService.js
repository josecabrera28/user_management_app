let userModel = require('./userModel');
let key = 'mystudentsaretalented';
let encryptor = require ('simple-encryptor')(key);
module.exports.saveUserInfoService = (userDetails)=>{
    return new Promise(function saveUserInfoFun(resolve,reject){
        let userModelData = new userModel();
        userModelData.username= userDetails.username;
        userModelData.email = userDetails.email;

        //password encryptation
        let encryptedPassword = encryptor.encrypt(userDetails.password);
        userModelData.password = encryptedPassword;

        userModelData.save(function resultHandle(err, res){
            if(err){
                reject(false);
            }else{
                resolve(true);
            }
        });
    });
}

module.exports.userLoginService = (userLoginDetails) =>{
    return new Promise (function userLoginFunctionality(resolve,reject){
        userModel.findOne({email: userLoginDetails.email}, function getLoginResult(error,result){
            if (err) {
                reject(status: false, message: "Invalid Data");
            } else {
                
            }
        });
    });
}