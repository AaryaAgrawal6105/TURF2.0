import mongoose from "mongoose";

const connect = async()=>{
    await mongoose.connect('mongodb://localhost/turf_db')
}


export default connect;