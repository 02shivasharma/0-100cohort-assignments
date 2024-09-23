import { client } from "../index";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    await client.connect()
    try{
        const insertQuery = "INSERT INTO todos(userID, title, description) VALUES($1, $2, $3)"
        const values = [userId, title, description]
        const response = await client.query(insertQuery, values)
        console.log("todo is added successfully", response)

    }catch(err){
        console.error("something went wrong", err)
    }finally{
        await client.end()
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
   await client.connect();
   try{
 const query = `
        UPDATE todos
        SET done = true
        WHERE todo_id = $1 AND done = false
        RETURNING *;
    `;
    const values = [todoId];
     const response = await client.query(query, values);
     console.log("updated suer id :", response)
   }catch(err){
    console.error("error in insertion:", err)
   }finally{
    await client.end()
   }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
   await client.connect()
   try{
    const getQuery = "SELEC title * FROM todos where userId = $1",
    const values = [userId];
    const response = await client.query(getQuery, values)
    if(response.rows.length > 0){
        for(let i = 0; i < response.rows.length, i++){
            console.log(response.rows[i])
        }
    }
   }
}