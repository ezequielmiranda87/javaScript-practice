'use strict'
/* Callbacks  */

// Declaración Funcion Asincrona
function doAnithingAsync(flag, callback){
    if(flag){
        // Ejecución de proceso asincrono 
        setTimeout((e)=>{
            callback(null, {
                            users: [
                                    {id:1, username:'Carlitox', age:18},
                                    {id:1, username:'Carlitox', age:18},
                                    {id:1, username:'Carlitox', age:18}
                                    ]
                            }
                    )
        }, 5000)
    }else
        setTimeout((e)=>{
            callback({message:'Ocurrio un error durante la ejecución del preso asincrono'})
        }, 1000)
    }


// Declaración  Funcion Callback
function callbackOutline(err, result){
    if (err) throw new Error(err.message)
    console.log(result)
}


// Ejecución funcion asincrona con callback inline
const myFlag = false
doAnithingAsync(myFlag, (err, result)=>{
    if (err) throw new Error(err.message)
    console.log(result)
})

