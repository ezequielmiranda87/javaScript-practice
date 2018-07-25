
// Declaración de funcion asincrona con capa de promesas
const obtenerUsuario = new Promise((resolve, reject)=>{
    const flag = true;
    if(flag){
        setTimeout(()=>{
            const users = [
                            {id:1, username:'thom', age:28},
                            {id:1, username:'thom', age:28},
                            {id:1, username:'thom', age:28},
                            {id:1, username:'thom', age:28},
                            {id:1, username:'thom', age:28},
                         ]
            resolve(users)
        }, 5000)
    }else{
        setTimeout(()=>{
            reject({message:'No se pudo obtener el resultado'})
        }, 2000)
    }

})

// Ejecución de función asincrona
obtenerUsuario
.then((result)=>{
    console.log(result)
})
.catch(err=>{
    console.log(err)
})

const obtenerUsuario2 = function(flag){
    return  new Promise((resolve, reject)=>{
        if(flag){
            setTimeout(()=>{
                const users = [ {id:1, username:'thom', age:28},
                                {id:1, username:'thom', age:28},
                                {id:1, username:'thom', age:28},
                                {id:1, username:'thom', age:28},
                                {id:1, username:'thom', age:28},]
                resolve(users)
            }, 5000)
        }else{
            setTimeout(()=>{
                reject({message:'No se pudo obtener el resultado'})
            }, 2000)
        }
    
    })   
}


// Ejecución de función asincrona enviando parametro
obtenerUsuario2(false)
.then((result)=>{
    console.log(result)
})
.catch(err=>{
    throw new Error(err.message)
})