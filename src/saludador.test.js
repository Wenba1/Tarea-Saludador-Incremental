import { saludador,saludadorConNombre, saludadorConHora, saludadorSegunElGenero, saludadorSegunEdadYGenero } from "./saludador";

describe("Saludador:", () => {
    it("deberia saludar con 'Hola'", () => {
        expect(saludador()).toEqual("Hola");
    });

    it("deberia saludar con 'Hola' incluyendo el nombre", () => {
        expect(saludadorConNombre("Diana")).toEqual("Hola Diana");
    });

    it("deberia saludar con 'Hola' incluyendo el nombre", () => {
        expect(saludadorConNombre("Diana")).toEqual("Hola Diana");
    });

    it("deberia saludar con segun la hora", () => {
        expect(saludadorConHora(10)).toEqual("Buenos dias");
    });

    it("deberia saludar con segun la hora", () => {
        expect(saludadorConHora(15)).toEqual("Buenas tardes");
    });

    it("deberia saludar con segun la hora", () => {
        expect(saludadorConHora(20)).toEqual("Buenas noches");
    });

    it("deberia saludar con segun el genero", () => {
        expect(saludadorSegunElGenero("Fabiola","Femenino")).toEqual("Hola, Sra. Fabiola");
    });

    it("deberia saludar con segun el genero", () => {
        expect(saludadorSegunElGenero("Marcos","Masculino")).toEqual("Hola, Sr. Marcos");
    });

    it("deberia saludar con segun la edad", () => {
        expect(saludadorSegunEdadYGenero("Felipe",40,"Masculino")).toEqual("Hola, Sr. Felipe");
        expect(saludadorSegunEdadYGenero("Emilia",28,"Femenino")).toEqual("Hola, Emilia");
    });
});