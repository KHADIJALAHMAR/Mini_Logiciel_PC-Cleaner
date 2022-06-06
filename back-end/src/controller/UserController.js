require('dotenv')
const User =require('../models/user');
const jwt =require('jsonwebtoken');

const Register = async (req,res)=>{
    try{
        const data = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                repeated_password: req.body.repeated_password,
            }
            if(data.password !==data.repeated_password){
                
                console.log({message : "passwords are not Identical"})
            }
            // console.log('==', data.role ==="livreur" ? 'pending' : null)
                const user = await User.create({
                username :data.username,
                email:data.email,
                password:data.password,
            })

            res.status(201).json({
                message: `created User`,
                data: user
        });
        }
        catch (error) {
            res.status(400).json({error:error.message});
        }

}
const Login = async (req,res) => {
    try{
        const user = await User.findOne({where : {email: req.body.email}});

        if (!user) {
            res.status(404).json({message : "email Not Fond"});
        }
        else{
            await  User.findOne({where :{ email: req.body.email, password :req.body.password}}).then((user)=>{
                if(!user){
                    res.status(404).json({where :{message : 'Password incorect'}})
                }else{
                        const id = user.id;
                        const email = user.email;
                        const username= user.username
                        const accessToken = jwt.sign({id,email,username},process.env.TOKEN_SECRET);
                        res.json({accessToken ,user});
                    }
            })
        } 
    } catch(error){
        res.status(400).json({error: error.message})
    }
    ;
}
module.exports ={
    Register,
    Login,

}
