import express  from "express"
import { insertData  , verifyUser } from "../db/query.js"
const router = express.Router() 


router.post('/signup',async (req,res,next)=>{
    const {username , password , email} =  req.body
    const message = await insertData(username,password,email)
    res.status(200).send(message)
})


router.post('/signin',async (req,res,next)=>{
    const {email , password} = req.body
    const exists = await verifyUser(email,password)
    if(exists){
        res.status(200).send("Successfully logged In")
    }else{
        res.status(200).send("Incorrect credentials")
    }
})







export default router 