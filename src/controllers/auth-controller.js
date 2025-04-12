import UserService from '../services/user-service.js'

const userService= new UserService();

export const signup = async(req,res)=>{
try {
    const user = await userService.signup({email : req.body.email ,password: req.body.password ,username: req.body.username});
    return res.status(201).json({
        data : user,
        message:'user created successfully',
        err : {},
        success :true
    })
    
} catch (error) {
    return res.status(401).json({
        data : {},
        message:'failed to create the user',
        err:error,
        success:false
    })
}
}


export const login = async(req,res)=>{
try {
    const token = await userService.login(req.body);
    return res.status(200).json({
        data : token,
        message:'user logged in successfully',
        err : {},
        success :true
    })
    
} catch (error) {
    return res.status(500).json({
        data : {},
        message:'failed to login the user',
        err:error,
        success:false
    })
       


}
}





