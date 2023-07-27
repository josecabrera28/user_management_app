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

        userModelData.save(function resultHandle(err, result){
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
            if (error) {
                console.log(error.message);
                reject({status: false, message: "Invalid Data"});
            } else {
                if (result != undefined && result!=null) {
                    let decryptedPassword = encryptor.decrypt(result.password);
                    if (decryptedPassword == userLoginDetails.password) {
                        resolve({status: true, message: "User validated Successfully!"});
                    }else{
                        reject({status: false, message: "Incorrect password!"});
                    }
                }else{
                    reject({status: false, message: "User does not exist"});
                }
            }
        });
    });
}