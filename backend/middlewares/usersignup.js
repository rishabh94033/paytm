const z = require("zod")

const userSchema = z.object({
    username: z.string(),
    firstName: z.string(),
    lastname: z.string(),
    password: z.string().min(8)
})
function userauth(req, res, next) {
    const username = req.body.username;
    const firstName = req.body.firstName;
    const lastname = req.body.lastname;
    const password = req.body.password;

    const user = userSchema.safeParse({
        username: username,
        firstName: firstName,
        lastname: lastname,
        password: password
    })
    if(user){
        next()
    }
    else{
        res.status(404).json({
            message:"invalid format"
        })
    }
}

module.exports = userauth