import mongoose from "mongoose";

class CrudRepository{

    constructor(model){
        this.model = model;
    }


    async create(data){
        try {
            console.log('in repo')
            const result = await this.model.create(data);
            console.log(result);
            return result;
            
        } catch (error) {
            console.log('error in crud repository')
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);;
            return result;
            
        } catch (error) {
            console.log('error in crud repository')
            throw error;
        }
    
    }
    async getAll(){

        try {
            const result = await this.model.find();
            return result;
            
        } catch (error) {
            console.log('error in crud repository')
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return true;
            
        } catch (error) {
            console.log('error in crud repository')
            throw error;
        }
    }

    async update(id,data){
            try {
                const result = await this.model.findByIdAndUpdate(id , data, {new:true});
                return result;
            } catch (error) {
                console.log('error in crud repository')
            throw error;
            }
    }

}

export default CrudRepository;