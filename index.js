const express = require("express")
const app = express()
const {connection} = require("./db")
require("dotenv").config();
const {userRouter} = require("./route/user.route")

app.use(express.json())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log('DB is connected')
    } catch (error) {
        console.log('Server is not connected')
    }
    console.log(`Server is connected at port ${process.env.PORT}`)
})

