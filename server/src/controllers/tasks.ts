import { prisma } from "../database/client"

export const addTask = async (request: any, response: any) => {
    try {
        const result = await prisma.task.create({
            data: {
                title: request.body.title,
                deadline: request.body.deadLine,
                description: request.body.description,
                userId: request.body.userId,
                isDone: false,
                color: request.body.color
            },
        })
        return response.status(200).json("Cadastrado com Sucesso!");
    } catch (error) {
        return response.status(400).json(error);
    }
}

export const getTasks = async (request: any, response: any) => {
    console.log(request.params.id);
    const tasks = await prisma.task.findMany({
        where: {
            userId: parseInt(request.params.id),
        },
        select: {
            id: true,
            title: true,
            description: true,
            deadline: true,
            color: true
        }
    })
    return response.status(200).json(tasks);
}
