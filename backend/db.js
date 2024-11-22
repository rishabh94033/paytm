const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://admin:BC9ykgsyILEwRGfT@cluster0.cy0b4.mongodb.net/Paytm')

// const userSchema=new mongoose.Schema({
//     username:String,
//     password:String,
//     firstName:String,
//     lastname:String
// })

//Better way

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model('User', userSchema);

const accountSchema=new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true},
    balance:Number
})

const Account= mongoose.model("Account",accountSchema)
module.exports={
    User,
    Account
}
