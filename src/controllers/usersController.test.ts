import { UsersController } from './usersController';
import { makeMockResponse } from '../mocks/mockResponse';

import { Request } from 'express'
describe("Users Controller", ()=>{
    const usersController = new UsersController();
    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()

    

it('Deve listar os usuários do banco de dados', ()=>{
    usersController.listarUsuario(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toHaveLength(1)
})

it('Deve criar um usuário no banco de dados', ()=>{

    mockRequest.body = {
        name: "Novo usuário"
    }
    usersController.criarUsuario(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado`})
})

it("Não deve criar um usuário sem nome",()=>{

    mockRequest.body = {
        name: ''
    }
    usersController.criarUsuario(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(403)
    expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possível criar usuários sem um nome'})

})
})