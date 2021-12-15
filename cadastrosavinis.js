//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
let dataevento = 15/12/2021
if (dataevento >14/12/2021 ) {
  console.log("permitir evento")  
} else {
    console.log("cadastro não permitido por data inválida")
}
//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
let participante = 45
if (participante>=18) {
    console.log("permitir cadastro")
} else {
       console.log("cadastro não é permitido pela idade") 
    }

    let listaDeParticipantes = ["Paulo", "Pedro","Maria","Claudio"]
    let quantidadeDeParticipantes = listaDeParticipantes.length;
    listaDeParticipantes.push("Tadeu")
    console.log(listaDeParticipantes)
    
//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
let listaparticipante = ["Helena","Chico","Mario","Pedro"]
if (listaparticipante.length <100) {
    console.log("permitir cadastro")
} else {
    console.log("cadastro não permitido por ter excedido o limite")
}
    