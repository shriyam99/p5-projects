const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.static(path.join(__dirname,'/public')));

app.get('*', (req, res)=>{
    res.redirect('http://portfolio-shriyam99.herokuapp.com');
})
app.listen(PORT, ()=>{
    console.log('Server has started');
})