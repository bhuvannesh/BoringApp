import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

const app = express();
const port = process.env.PORT || 8001

const connection_url = `mongodb+srv://admin:D1aWM169NmyMeZaL@cluster0.zgeob.mongodb.net/BoringDB?retryWrites=true&w=majority`

//mid
app.use(express.json());
app.use(Cors());


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})


app.get('/boring/card', (req,res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }
        res.status(200).send(data)
    });
});




app.post('/boring/card', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        res.status(201).send(data)
    });

});

app.get('/', (req,res) => res.status(200).send("heyy...IM up"));

app.listen(port, () => console.log(`listening to host:${port}`));