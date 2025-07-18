import express from 'express';

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
})

app.listen(3000,()=>{
    console.log(`the server is running on http://localhost: ${3000}`);
});

//DRY principle
//KISS principle