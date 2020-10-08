import express from 'express';
import data from './data';

const app = express();

app.get("/api/services", (req,res) => {
    res.send(data.services);
});

app.get('/api/services/:id', (req, res) => {
    const serviceId = req.params.id;
    const service = data.services.find(x => x._id === serviceId);
    if(service){
        res.send(service)
    }else{
        res.status(404).send({msg: 'Service not found'})
    }
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000")})