const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    return res.json({message: 'Server is up'})
})

app.get('/atualizou',(req,res)=>{
    return res.json({message: 'Atualizado!'})
})

app.listen(3333)