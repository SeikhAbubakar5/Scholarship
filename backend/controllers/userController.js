const User=require('../models/User')
var xlsxj=require('xlsx-to-json')


const importUser= async (req,res)=>{
        try {
            let userData=[];
            xlsxj().fromFile(req.file.path).then(async(res)=>{
                for(let x=0;x<res.length;x++){
                    userData.push(({
                        name:res[x].Name,
                        email:res[x].Email,
                        enrollment:res[x].Enrollment,
                        date:res[x].Date
                    }))
                }
                await User.insertMany(userData)
            })
            res.send({status:200 ,success:true,msg:"excel imported"});
        } catch (error) {
            res.send({status:400 ,success:false,msg:error.message});
        }
}
module.exports={
    importUser,
}