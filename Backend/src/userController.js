let userService = require('./userService');
let saveUserInfoController =  async (req,res)=>{
    try {
        let status = await userService.saveUserInfoService(req.body);
        if(status){
            res.send({"status":true, message: "User saved Successfully!"})
        }else{
            res.send({"status":false, message: "Error in saving User Information!"})
        }
    } catch (error) {
        console.error(error);
        console.log(error);
    }
}

module.exports={saveUserInfoController}