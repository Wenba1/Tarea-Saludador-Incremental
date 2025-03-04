import { saludador,saludadorConNombre } from "./saludador";

describe("Saludador:", () => {
    it("deberia saludar con 'Hola'", () => {
        expect(saludador()).toEqual("Hola");
    });

    it("deberia saludar con 'Hola' incluyendo el nombre", () => {
        expect(saludadorConNombre("Diana")).toEqual("Hola Diana");
    });
});