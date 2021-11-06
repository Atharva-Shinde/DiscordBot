const express = require("express")
const app = express()

// view engine is responsible for deciding how we are going to process view which here is ejs
app.set('view engine', 'ejs')

// this tells express to use the files under public no matter what 
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=> {
   const code = `Lorem ipsum dolor 
   sit amet consectetur adipisicing elit! Voluptatib!
   sit amet consectetur adipisicing elit. Voluptatib
   us ab perferendis voluptate cum possimus laborum, id aliquam dignissimos et molestias enim commodi sed labore maxime consequatur dolorum sit omnis optio!`
    // to send information from sever (i.e server.js) to client i.e (code-display.ejs) we use the second parameter, inside res.render
    res.render('code-display.ejs', {code} )
})

app.get('/new', (req,res)=>{
    res.render('new.ejs')
})

app.post('/save', (req,res)=>{
    // ...body.value here value is the name we gave inside new.ejs textarea name field 
    const value = req.body.value
    console.log(value)
})

app.listen(3000)