import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
   

   try{
    await client.connect()
    const insertQuery = "INSERT INTO users (username, password, name) VALUES($1,$2,$3)"
    const values = [username, password, name]
    const response = await client.query(insertQuery, values);
    console.log("insertion scuccesfull : ", response)
   }catch(err){
    console.error("Invalid user is provided", err);
   }finally{
        await client.end()
   }
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    
    try{
        await client.connect()
        const findQuery = "SELECT * FROM users where userId = $1"
        const values = [userId]
        const response = await client.query(findQuery, values)
        if(response.rows.length > 0){
          console.log("User found:", response.rows[0])
          return response.rows[0]
        }else{
            console.log("No user found with given detail")
            return null
        }
    }catch(err){
        console.error("invlaid userId:", err);
        throw err
    }finally{
        await client.end()
  }
}
