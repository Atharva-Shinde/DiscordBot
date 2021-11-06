const express = require('express')
const app = express()
// view engine is responsible for deciding how we are going to process view which here is ejs
app.set('view engine', 'ejs')

app.get('/', (req,res)=> {
   const code = `Lorem ipsum dolor 
   sit amet consectetur adipisicing elit! Voluptatib!
   sit amet consectetur adipisicing elit. Voluptatib
   us ab perferendis voluptate cum possimus laborum, id aliquam dignissimos et molestias enim commodi sed labore maxime consequatur dolorum sit omnis optio!`
    // to send information from sever (i.e server.js) to client i.e (code-display.ejs) we use the second parameter, inside res.render
    res.render('code-display.ejs', {code} )
})
app.listen(3000)