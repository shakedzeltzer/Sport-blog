const express = require('express')
var cors = require('cors')
import { getAllGames, getAllGamesByCategory, getGameComments, insertGameComment } from './repositories/mySql'
import bodyParser from 'body-parser';

const app = express()
const port = 2000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/games', (req, res) => {
    getAllGames((data) => {
        res.send(data);
    })
})

app.get('/games/:category', (req, res) => {
    getAllGamesByCategory(req.params.category, (data) => {
        res.send(data);
    })
})

app.get('/comments/:gameId', (req, res) => {
    getGameComments(req.params.gameId, (data) => {
        res.send(data);
    })
})

app.post('/comment', (req, res) => {
    insertGameComment(req.body, () => {
        res.send("Ok")
    });
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})