const express = require('express');
const app = express();
const port = 5000;
const categories = require('./data/categories.json');
const cors = require('cors');
const news = require('./data/news.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Send Successfully')
})

app.listen(port, () => {
    console.log('Dragon News running on', port)
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news-categories/:id', (req, res) => {

    
        const id = req.params.id;
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews);
    
})

app.get('/news/:id',(req,res)=>{
    const id= req.params.id;
    const selectedNews = news.find(sn=>sn._id=== id);

    res.send(selectedNews);
})



app.get('/news', (req, res) => {
    res.send(news);
})
