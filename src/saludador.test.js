import saludador from "./saludador.js";

describe("Saludador:", () => {
    it("deberia saludar con 'Hola'", () => {
        expect(saludador()).toEqual("Hola");
    });
  });