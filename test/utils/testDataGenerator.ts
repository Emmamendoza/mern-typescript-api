import Video from "../../src/routes/Video"

const videos = [
    {
        "title": "React router dom v6",
        "description": "See what changes on React router dom v6",
        "url": "https://www.youtube.com/watch?v=UjHT_NKR_gU"
    },
    {
        "title": "Testing with jest",
        "description": "See what changes on test with supertest",
        "url": "https://www.youtube.com/watch?v=_xxVJdGNMrs"
    }
]

const testDataGenerator: any = {
    
    generateData: async () => {
        await Video.deleteMany({})
        const video1 = new Video(videos[0])
        video1.save()
        const video2 = new Video(videos[1])
        video2.save()
    }
}



export default testDataGenerator