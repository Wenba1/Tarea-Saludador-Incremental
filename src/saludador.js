function saludador(idioma) {
    if(idioma==="español"){
        return "Hola";
    }else if(idioma==="ingles"){
        return "Hello";
    }
}

function saludadorConNombre(nombre, idioma) {
    if(idioma==="español"){
        return `Hola ${nombre}`;
    }else if(idioma==="ingles"){
        return `Hello ${nombre}`;
    }
}

function saludadorConHora(hora=new Date().getHours(), idioma){
    if(idioma==="español"){
        if(hora<12){
            return "Buenos dias";
        }else if(hora<18){
            return "Buenas tardes";
        }else{
            return "Buenas noches";
        }
    }else{
        if(hora<12){
            return "Good morning";
        }else if(hora<18){
            return "Good afternoon";
        }else{
            return "Good evening";
        }
    }
}

function saludadorSegunElGenero(nombre, genero, idioma){
    if(idioma==="español"){
        if(genero==="Femenino"){
            return `Hola, Sra. ${nombre}`;
        }else if(genero==="Masculino"){
            return `Hola, Sr. ${nombre}`;
        }
    }else{
        if(genero==="Female"){
            return `Hello, Ms. ${nombre}`;
        }else if(genero==="Male"){
            return `Hello, Mr. ${nombre}`;
        }
    }
}

function saludadorSegunEdadYGenero(nombre, edad, genero,idioma) {

    if(idioma==="español"){
        if(edad>30){
            if(genero==="Femenino"){
                return `Hola, Sra. ${nombre}`;
            }else if(genero==="Masculino"){
                return `Hola, Sr. ${nombre}`;
            }
        }
        return `Hola, ${nombre}`;
    }else if(idioma==="ingles"){
        if(edad>30){
            if(genero==="Female"){
                return `Hello, Ms. ${nombre}`;
            }else if(genero==="Male"){
                return `Hello, Mr. ${nombre}`;
            }
        }
        return `Hello, ${nombre}`;
    }
}



export { saludador, saludadorConNombre, saludadorConHora, saludadorSegunElGenero, saludadorSegunEdadYGenero};