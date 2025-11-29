const Express=require('express')
const App=Express()

require('dotenv').config()

const PORT=process.env.PORT||5000

const Router=require('./src/Router/Login.Router')

App.use('/api',Router)

App.use(Express.json())

App.listen(PORT,()=>{
    console.log(`🚀http://localhost: ${PORT}`)
})
