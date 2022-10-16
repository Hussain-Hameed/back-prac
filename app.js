const express = require('express')
const app = express()

app.git('/',(req,res)=>{
    res.json({
        mesg:'helloworld in backend'
    })
})

app.listen(3000)
