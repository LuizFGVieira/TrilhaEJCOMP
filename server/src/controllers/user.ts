import { prisma } from "../database/client"

export const getUsers = async (request: any, response: any) => {
    const result: object | null = await prisma.user.findUnique({
        where: {
            id: 3,
        },
        select: {
            email: true,
            name: true,
        },
    })
    return response.status(200).json(result);
}

export const addUsers = async (request: any, response: any) => {
    const result = await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            password: request.body.password
        },
    })
    return response.status(200).json("Cadastrado com Sucesso!");
}
