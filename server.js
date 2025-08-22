import express from 'express';
import sum from './sum.js';
const app = express();
const PORT = 8080;

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sum/:a/:b', (req, res) => {
    const{a,b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
});