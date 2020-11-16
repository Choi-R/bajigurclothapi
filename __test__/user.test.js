const supertest = require('supertest')
const app = require('../index.js')
const request = supertest(app)
const index = require('../src/models/index')
const User = index.User
let newUser = {
    name: "Choi",
    email: "choi@mail.com",
    password: "password",
    isAdmin: true
}
let fakeUser = {
    name: 123,
    email: 456,
    password: 789,
}
let fakeUser2 = {
    email: "choi@mail.com",
    password: "otherpassword"
}
let newItem = {
    name: "T-Shirt",
    category: "Shirt",
    price: 150000,
    description: "This T-Shirt is so good",
    totalStock: 10
}
let buyItem = {
    address: 'Mataram, NTB'
}


let token
let itemId

beforeAll(done => {
    User.destroy({
        where: {}
    })
        .then(() => done())
})

afterAll(done => {
    User.destroy({
        where: {}
    })
        .then(() => done())

})
describe('POST /api/v1/user', function () {
    test('should register an user', function (done) {
        request.post(`/api/v1/user`)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(newUser))
            .then((res) => {
                token = res.body.data.token
                expect(res.statusCode).toBe(201)
                expect(res.body.data).toHaveProperty('name')
                done()
            })
    })

    test('should fail to register', function (done) {
        request.post(`/api/v1/user`)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(fakeUser))
            .then((res) => {
                expect(res.statusCode).toBe(422)
                done()
            })
    })
})

describe('PUT /api/v1/user', function () {
    test('should login', function (done) {
        request.put(`/api/v1/user`)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(newUser))
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })

    test('should fail to get token', function (done) {
        request.put(`/api/v1/user`)
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(fakeUser2))
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})

describe('GET /api/v1/user', function () {
    test(`should get one's own profile`, function (done) {
        request.get(`/api/v1/user`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })

    test(`should get another profile`, function (done) {
        request.get(`/api/v1/user?name=Choi`)
            .set('Content-Type', 'application/json')
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})

describe('GET /api/v1/history', function () {
    test(`should get one's histories`, function (done) {
        request.get(`/api/v1/history`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})

describe('POST /api/v1/item', function () {
    test('should create an item', function (done) {
        request.post(`/api/v1/item`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .send(JSON.stringify(newItem))
            .then((res) => {
                itemId = res.body.data.id
                expect(res.statusCode).toBe(201)
                expect(res.body.data).toHaveProperty('name')
                done()
            })
    })
})

describe('GET /api/v1/item', function () {
    test('should get a list of items', function (done) {
        request.get(`/api/v1/item`)
            .set('Content-Type', 'application/json')
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})

describe('GET /api/v1/item/:itemId', function () {
    test('should get an item while logged in', function (done) {
        request.get(`/api/v1/item/${itemId}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })

    test('should get an item while not logged in', function (done) {
        request.get(`/api/v1/item/${itemId}`)
            .set('Content-Type', 'application/json')
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})

describe('PUT /api/v1/buy/:itemId', function () {
    test('should buy an item', function (done) {
        request.put(`/api/v1/buy/${itemId}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .send(JSON.stringify(buyItem))
            .then((res) => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})
