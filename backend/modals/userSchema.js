import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
googleId:String,
imagedoc:String,
tel:String,
bookBed:[Object],
bookAppointment:[Object]
})
export const UserModal = mongoose.model("userData",userSchema);