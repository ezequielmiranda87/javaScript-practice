// Fuente: https://alligator.io/nodejs/event-driven-programming/
const EventEmmiter = require('events').EventEmitter

// Imaginemos que tenemos una sala de chat y queremos informar a todo cuando un nuevo usuario ingresa a la sala de chat
const chatRoomEvents = new EventEmmiter;

function alertAllUsers(message){
    console.log(message)
}

function userJoined(username){
    // Asumiendo que ya tenemos una funcion para alertar a todos los usuarios
    alertAllUsers(`User ${username} has joined the chat `)
}

//chatRoomEvents.on('userJoined', userJoined)

chatRoomEvents.on('userJoined', (username)=>{
    console.log('El evento userJoined se disparo')
    // Asumiendo que ya tenemos una funcion para alertar a todos los usuarios
    alertAllUsers(`User ${username} has joined the chat`)
} )

function login(username, password){
    //Logic login
    const flag = true; 
    if(flag){
        console.log('Login ok')
        chatRoomEvents.emit('userJoined', username)
    }else{
        console.log('Login fail')
    }

}

login('Ezex', 'password')