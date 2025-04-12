import UserRepository from '../repository/user-repository.js'

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            console.log('in service')
            return user;
        } catch (error) {
            console.log('error in user-service');
            throw error;
        }
    }

    

    async login(data){

        const user = await this.userRepository.findByEmail(data.email);
        if(!user){
            throw ({
                message:'no user found'
            })
        }
        if(!user.comparePassword(data.password)){
            throw ({
                message : 'incorrect password'
            })
        }
        const token = user.generateJwt();
        
        return token;


    }
}

export default UserService;