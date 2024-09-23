import  {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
async function insertTodo(userId : number) {
    const res = await prisma.todo.create({
       data : {
        title : "Learn Prisma",
        descripttion : "Lear Prisma With TypeScript",
        userId : userId
       }
    })
    console.log(res)
}
async function findTodoWithUser(userId : number){
    const res = await prisma.todo.findMany({
        where :{
            userId:userId
        },
        select :{
            id: true,
            descripttion : true,
            title: true,
            user: true
        }
    })
    console.log(res)
}

insertTodo(1)