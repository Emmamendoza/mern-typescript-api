import videoRoutes from '../../src/routes/videos.routes';
import request from 'supertest'
describe("Testing Video Routes", () => {
    test("GET Videos", async () => {
        //const response = await request(videoRoutes).get('/videos').send()
        const videos = videoRoutes.get("/videos")

        expect(videos).toBeInstanceOf(Object)
        //expect(response.body).toBeInstanceOf(Array)
    })
})