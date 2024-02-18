import  express from "express"
import { myDataSource } from "./configs/app-data-source";

const app = express() 

myDataSource
    .initialize()
    .then(() => {
        console.log("Connection Succesfull!")
    })
    .catch((err) => {
        console.error("Connection Error", err)
    })

app.use(express.json())
const port = 4000 ; 

app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(port , ()=> {
    console.log(`app running on port ${port}`)
})