const axios=require('axios')
require('dotenv').config()
const express=require('express')
const app=express()
const port=3000
const cors = require('cors')






app.use(cors())
app.get('/', async (req,res)=> {
    // const response = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2026-06-23&sortBy=popularity&apiKey=${process.env.API_KEY}`)
    // console.log(response.data)
    // console.log('is this working')
    res.send('Hello World!')
})


// technology
app.get('/technology', async (req, res)=> {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=${process.env.API_KEY}`)
//   changed app.get from /politics to /technology, changed api url to category=technology


    console.log("frontend made request (tech)")
    // res.json(JSON.stringify(response))
    if(response.data){res.status(200).json(response.data)}

    else{res.status(404).json({message:"something went wrong"})}

   
    
})


// healthcare
app.get('/healthcare', async (req, res)=> {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${process.env.API_KEY}`)
//   changed app.get from /politics to /technology, changed api url to category=technology


    console.log("frontend made request (healthcare)")
    // res.json(JSON.stringify(response))
    if(response.data){res.status(200).json(response.data)}

    else{res.status(404).json({message:"something went wrong"})}

   
    
})


// economics/business
app.get('/economics', async (req,res)=>{
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=${process.env.API_KEY}`)

    console.log("frontend made request (economics)")
    // res.json(JSON.stringify(response))
    if(response.data){res.status(200).json(response.data)}

    else{res.status(404).json({message:"something went wrong"})}
})
app.listen(port, ()=> {
    console.log(`Example app listening on port localhost http://localhost:3000 ${port}`)
})


app.get('/politics',async (req,res)=>{

    const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=${process.env.NEWSDATAIO_KEY}&category=politics&language=english`)

    console.log("frontend made request (politics)")
    console.log(response.data)
    if (response.data){res.status(200).json(response.data)}
    

    else{res.status(404).json({message:"something went wrong"})}

})



app.get('/environment',async (req,res)=>{

    const response = await axios.get(`https://newsdata.io/api/1/latest?apikey=${process.env.NEWSDATAIO_KEY}&category=environment&language=english`)
    console.log("frontend made request (environment)")

    if (response.data){res.status(200).json(response.data)}

    else{res.status(404).json({message:"something went wrong"})}
})



//import cors to fix security issue and fix get request from frontend to backend