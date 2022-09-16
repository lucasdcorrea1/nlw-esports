import express from 'express';
const app = express();
app.get('/v1/ads', (request, response) => {
    return response.json([
        {
            id: 1,
            name: "Lucas Damas Correa"
        },
        {
            id: 2,
            name: "Késsia Rodrigues Borges"
        },
        {
            id: 3,
            name: "Test 3"
        }
    ]);
});
app.listen(8080);
