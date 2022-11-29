const express = require('express');
const app = express()

app.get('/signup',(req,res)=>{
    res.send('hello world')
})

app.listen(1337, ()=>{
    console.log('listrning on 1337');
})



