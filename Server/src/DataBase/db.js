const SQLite3 = require('sqlite3')

const Ruta=require('path')

const SQLite3_Ubicacion=Ruta.resolve(__dirname, './Edutrak.db')

const db_crear=new SQLite3.Database(SQLite3_Ubicacion, (error)=>{
    if(error){
        console.error('No se pudo crear correctamente la base de datos 🤬', error.message)
    }
    else{
        console.log('Base de datos creada correctamente 👻👻👻')
    }
})

module.exports=db_crear;