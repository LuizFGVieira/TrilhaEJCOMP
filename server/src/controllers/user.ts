import { prisma } from "../database/client"

export const authUsers = async (request: any, response: any) => {
    const result: object | null = await prisma.user.findFirst({
        where: {
            email: request.body.email,
            password: request.body.password,
        },
        select: {
            id: true,
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
