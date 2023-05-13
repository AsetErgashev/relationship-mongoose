import mongoose from "mongoose";


const Car = new mongoose.Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      }
  });
  
  export default mongoose.model('Car', Car);