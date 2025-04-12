import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema( {

        email : {
            type : String,
            required : true,
            unique:true
        },
        password : {
            type : String,
            required : true,
            minLength :[8, 'Password must be at least 8 characters long'],
        },
        username :{
            type :String,
            unique : true
        }
})

userSchema.pre('save',  function(next){
         const user = this;
         const SALT = bcrypt.genSaltSync(9);

         const encryptedPassword = bcrypt.hashSync(user.password , SALT);
         user.password = encryptedPassword;
         
         next();
})

userSchema.methods.comparePassword = function compare(password){
    return bcrypt.compareSync(password,this.password);
}


userSchema.methods.generateJwt = function generate(){

        return jwt.sign(
            {
                id:this.id,
                email:this.email
            },'turf_secret',{
                expiresIn  :'1h'
            }
        )
}


const User = mongoose.model('User' , userSchema);


export default User;