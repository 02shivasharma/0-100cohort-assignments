import { Client } from 'pg'
 
// write a function to create a users table in your database.
 
const client = new Client({
  connectionString: "postgresql://shiva_owner:bL49hdcYRHGB@ep-round-queen-a5bjlmrk.us-east-2.aws.neon.tech/shiva?sslmode=require"
})


async function insertUserData(username : string, password:string,  email:string) {
    await client.connect()
    const result = await client.query(`
       INSERT INTO users3 (username, password, email)
       VALUES($1,$2,$3)
    `,[username, password, email])
    console.log(result)
}

insertUserData(
    "shivaji2",
    "shiva78@gmail.com",
    "12334"
);