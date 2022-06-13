import mongoose from 'mongoose'
import app from '../../src/app'
import server from '../../src/index'
import supertest from 'supertest'
import testDataGenerator from '../utils/testDataGenerator'
describe("Testing Video Routes", () => {

    const request = supertest(app)
    const contentType: string = "application/json"

    beforeEach(async () => {
        await testDataGenerator.generateData()
    })

    test("GET Videos", async () => {

        const response = await request.get('/videos')
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.type).toBe(contentType)
        expect(response.body).toBeInstanceOf(Array)
    })

    test("GET Video by Id", async () => {

        const allVideos = await request.get('/videos')
        const videoId = allVideos.body[0]._id
        const response = await request.get(`/videos/${videoId}`)

        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.type).toBe(contentType)
    })

    test("GET Video by Id with a non existing Id", async () => {

        const videoId = "62a6a9bddc5026ae2492d9ef"
        const response = await request.get(`/videos/${videoId}`)

        expect(response.statusCode).toBe(204)
    })


    test("POST Videos", async () => {

        const newVideo = {
            "title": "Vitest vs Jest",
            "description": "why Vitest could be better",
            "url": "https://www.youtube.com/watch?v=7f-71kYhK00"
        }

        const response = await request.post('/videos').send(newVideo)
        expect(response.statusCode).toBe(200)
    })

    afterAll(() => {
        mongoose.connection.close()
        server.close()
    })
})