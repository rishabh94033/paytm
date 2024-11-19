const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://admin:BC9ykgsyILEwRGfT@cluster0.cy0b4.mongodb.net/Paytm')

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastname:String
})

const User = mongoose.model('User', userSchema);

module.exports={
    User
}
