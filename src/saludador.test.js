import { saludador,saludadorConNombre, saludadorConHora, saludadorSegunElGenero, saludadorSegunEdadYGenero } from "./saludador";

describe("Saludador:", () => {
    it("deberia saludar con 'Hola'", () => {
        expect(saludador("español")).toEqual("Hola");
        expect(saludador("ingles")).toEqual("Hello");
    });

    it("deberia saludar con 'Hola' incluyendo el nombre", () => {
        expect(saludadorConNombre("Diana","español")).toEqual("Hola Diana");
        expect(saludadorConNombre("Leonardo","ingles")).toEqual("Hello Leonardo");
    });

    it("deberia saludar con segun la hora", () => {
        expect(saludadorConHora(10, "español")).toEqual("Buenos dias");
        expect(saludadorConHora(10, "ingles")).toEqual("Good morning");
    });

    it("deberia saludar con segun el genero", () => {
        expect(saludadorSegunElGenero("Fabiola","Femenino","español")).toEqual("Hola, Sra. Fabiola");
        expect(saludadorSegunElGenero("Marcos","Male","ingles")).toEqual("Hello, Mr. Marcos");
    });

    it("deberia saludar con segun la edad", () => {
        expect(saludadorSegunEdadYGenero("Felipe",40,"Masculino","español")).toEqual("Hola, Sr. Felipe");
        expect(saludadorSegunEdadYGenero("Emilia",28,"Femenino","español")).toEqual("Hola, Emilia");
        expect(saludadorSegunEdadYGenero("Britney",40,"Female","ingles")).toEqual("Hello, Ms. Britney");
        expect(saludadorSegunEdadYGenero("Jake",28,"Male","ingles")).toEqual("Hello, Jake");
    });
});