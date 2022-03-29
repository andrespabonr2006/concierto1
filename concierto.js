
let contenedor=document.getElementById("contenedor")
contenedor.addEventListener("click",function(evento){
    evento.preventDefault()

    let ciudad=document.getElementById("ciudad").value

    if(ciudad=="medellin"){
            alert("el concierto es el 8 de agosto")
    }else if(ciudad=="cali"){

        alert("el concierto es el 15 de agosto")

    }else if(ciudad=="bogota"){
        alert("el concierto es el 11 de agosto ")
    }else{
        alert("en esta ciudad no hay concierto")
    }

    
})
