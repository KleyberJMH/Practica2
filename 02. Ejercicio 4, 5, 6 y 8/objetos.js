//Ejercicio 4

function Gestor (name, user, password){
    this.name = name;
    this.user = user;
    this.password = password;
}

function Client (name, user, password){
    this.name = name;
    this.user = user;
    this.password = password;
}

function Mensaje (sender, reciver, msg) {
    this.sender = sender;
    this.reciver = reciver;
    this.msg = msg;
}

function Transferencia (sender, reciver, amount) {
    this.sender = sender;
    this.reciver = reciver;
    this .amount = amount;
}

let Gestor1 = new Gestor("Gestor1", "UserG1", "PassG1");
let Gestor2 = new Gestor("Gestor2", "UserG2", "PassG2");
let Gestor3 = new Gestor("Gestor3", "UserG3", "PassG3");

let Client1 = new Client("Cliente1", "UserC1", "PassC1");
let Client2 = new Client("Cliente2", "UserC2", "PassC2");
let Client3 = new Client("Cliente3", "UserC3", "PassC3");

let Mensaje1 = new Mensaje("Remitente1", "Receptor1", "Mensaje Ejemplo1");
let Mensaje2 = new Mensaje("Remitente2", "Receptor2", "Mensaje Ejemplo2");
let Mensaje3 = new Mensaje("Remitente3", "Receptor3", "Mensaje Ejemplo3");

let Transferencia1 = new Transferencia("Remitente1", "Receptor1", "100€");
let Transferencia2 = new Transferencia("Remitente2", "Receptor2", "200€");
let Transferencia3 = new Transferencia("Remitente3", "Receptor3", "300€");


//Ejercicio 5
let arrayGestores = [Gestor1, Gestor2, Gestor3];
let arrayClientes = [Client1, Client2, Client3];
let arrayMensajes = [Mensaje1, Mensaje2, Mensaje3];
let arrayTransferencias = [Transferencia1, Transferencia2, Transferencia3];

console.log("Arreglo Gestores");
for (const gestor of arrayGestores) {
    console.log(gestor);
}

console.log("Arreglo Clientes");
for (const cliente of arrayClientes) {
    console.log(cliente);
}

console.log("Arreglo Mensajes");
for (const mensaje of arrayMensajes) {
    console.log(mensaje);
}

console.log("Arreglo Transferencias");
for (const transferencia of arrayTransferencias) {
    console.log(transferencia);
}

//Ejercicio 6
//Array a Json
const JsonGestores = JSON.stringify(arrayGestores);
console.log("Gestores en JSON");
console.log(JsonGestores);

const JsonClientes = JSON.stringify(arrayClientes);
console.log("Clientes en JSON");
console.log(JsonClientes);

const JsonMensajes = JSON.stringify(arrayMensajes);
console.log("Mensajes en JSON");
console.log(JsonMensajes);

const JsonTransferencias = JSON.stringify(arrayTransferencias);
console.log("Transferencias en JSON");
console.log(JsonTransferencias);

//Json a Array
console.log("Gestores en Array desde JSON")
const Gestores = JSON.parse(JsonGestores);
console.log(Gestores)

console.log("Clientes en Array desde JSON")
const Clientes = JSON.parse(JsonClientes);
console.log(Clientes)

console.log("Mensajes en Array desde JSON")
const Mensajes = JSON.parse(JsonMensajes);
console.log(Mensajes)

console.log("Transferencias en Array desde JSON")
const Transferencias = JSON.parse(JsonTransferencias);
console.log(Transferencias)


// Ejercicio 8 (Se salto el 7 porque no se entiende)
function repetirCada5Segundo() {
setInterval(mostrarGestores, 5000);
}

function mostrarGestores() {
    console.log("Array gestores cada 5 segundos")
    console.log(arrayGestores);
}

repetirCada5Segundo();