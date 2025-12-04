import {model, Schema } from "mongoose";

const userSchema = new Schema({
   fullName:{
    type: String,
    required:[true, 'Full Name is required' ]
   },
   email:{
    type: String,
    required: [true, "Email is required"],
    unique: true
   },
   password:{
    type:String,
    required: [true, 'Password is required']
    
   }
});

const User = model('User', userSchema);

export default User;