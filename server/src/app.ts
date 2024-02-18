import express from "express"

const app = express() 
app.use(express.json())
const port = 4000 ; 

app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(port , ()=> {
    console.log(`app running on port ${port}`)
})