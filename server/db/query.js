import pg from "pg"
import {config} from "dotenv"
import {v4 as uuid} from 'uuid'
config()


const { Client } = pg
const client = new Client({
    connectionString : process.env.DB_LINK,
    ssl : {
        rejectUnauthorized : false
    }
})

client.connect().then(()=>console.log(`connected to db`)).catch((err)=>console.log(`Movie app connection error: ${err.message}`))


export const getId = async (email)=>{
    const { rows } = await client.query(`select id from users where email=$1`,[email])
    const data = rows[0]
    if(data.length === 0 ) return  "data not found"
    return data[0].id
} 

export const insertData = async (username,password,email)=>{
    const id = uuid()
    if(await usernameExists(username)){
        return "Username already exists pls choose another"
    }
    await client.query(`INSERT INTO users(id,username,password,email) values($1,$2,$3,$4)`,[id,username,password,email])
    return "successfully registered"
}


export const verifyUser = async (email,password)=>{
    const { rows } = await client.query(`SELECT id FROM users WHERE email=$1 AND password=$2`,[email,password])
    const id = rows && rows[0] && rows[0].id
    return id    
} 



const usernameExists = async (username)=>{
    const { rows } = await client.query(`select username from users`)
    const element = rows.filter((element)=> element.username === username)
    if(element.length!==0) return true;
    return false;
}


// const getUserId = async (username)=>{
//     const [result] = await client.query(`SELECT id FROM ${table.users} WHERE username=?`,[username])
//     if(result.length === 0 ) return false
//     const {id} = result[0]
//     return id
// }