const Express=require('express')
const App=Express()

const PORT=5000

App.listen(PORT,()=>{
    console.log(`🚀http://localhost: ${PORT}`)
})
