
export const usernameExists = async (username)=>{
    const [result] = await connection.query(`select username from ${table.users}`)
    const element = result.filter((element)=> element.username === username)
    if(element.length!==0) return true;
    return false;
}


export const getUserId = async (username)=>{
    const [result] = await connection.query(`SELECT id FROM ${table.users} WHERE username=?`,[username])
    if(result.length === 0 ) return false
    const {id} = result[0]
    return id
}