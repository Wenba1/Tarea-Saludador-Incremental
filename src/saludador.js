function saludador() {
    return "Hola";
}

function saludadorConNombre(nombre) {
    return `Hola ${nombre}`;
}

function saludadorConHora(hora=new Date().getHours()){
    if(hora<12){
        return "Buenos dias";
    }else if(hora<18){
        return "Buenas tardes";
    }else{
        return "Buenas noches";
    }
}

function saludadorSegunElGenero(nombre, genero){
    if(genero==="Femenino"){
        return `Hola, Sra. ${nombre}`;
    }else if(genero==="Masculino"){
        return `Hola, Sr. ${nombre}`;
    }
}
export { saludador, saludadorConNombre, saludadorConHora, saludadorSegunElGenero};