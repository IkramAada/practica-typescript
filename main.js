"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
// Crear registros de personas
var john = new Persona_1.Persona("John", "Doe", 25, "123456789", new Date(1998, 5, 15), "Azul", "Masculino", [
    new Direccion_1.Direccion("Calle Principal", 123, 2, "A", "28001", "Madrid", "Madrid"),
], [
    new Mail_1.Mail("Personal", "john.doe@example.com"),
    new Mail_1.Mail("Trabajo", "john.doe@company.com")
], [
    new Telefono_1.Telefono("Móvil", "123456789"),
    new Telefono_1.Telefono("Trabajo", "62354321")
], "Esta es una nota para John Doe.");
var jane = new Persona_1.Persona("Jane", "Smith", 30, "987654321", new Date(1993, 8, 20), "Rojo", "Femenino", [
    new Direccion_1.Direccion("Avenida Central", 456, 1, "B", "08001", "Barcelona", "Barcelona"),
    new Direccion_1.Direccion("Glorita Andante", 40, 3, "A", "65784", "Barcelona", "Barcelona")
], [new Mail_1.Mail("Trabajo", "jane.smith@example.com")], [new Telefono_1.Telefono("Trabajo", "987654321")], "Esta es una nota para Jane Smith.");
var bob = new Persona_1.Persona("Bob", "Johnson", 40, "456123789", new Date(1983, 2, 10), "Verde", "Masculino", [
    new Direccion_1.Direccion("Calle Secundaria", 789, 3, "C", "41001", "Sevilla", "Sevilla"),
], [new Mail_1.Mail("Personal", "bob.johnson@example.com")], [new Telefono_1.Telefono("Casa", "456123789")], "Esta es una nota para Bob Johnson.");
// Array de registros de persona
var agenda = [john, jane, bob];
// Mostrar registros de persona en la consola
console.log("================================================================================================");
console.log("Registros de Persona:");
agenda.forEach(function (persona) {
    console.log("================================================================================================");
    console.log(persona.obtenerDatos());
});
// Modificar el registro de Jane
var dniBusqueda = "987654321";
var personaEncontrada = agenda.filter(function (persona) { return persona.DNI === dniBusqueda; })[0];
if (!personaEncontrada) {
    console.log("No se encontró ninguna persona con el DNI " + dniBusqueda);
}
else {
    var nuevaDireccion = new Direccion_1.Direccion("Calle Nueva", 789, 4, "D", "41002", "Sevilla", "Sevilla");
    var nuevoMail = new Mail_1.Mail("Personal", "jane.smith.new@example.com");
    var nuevoTelefono = new Telefono_1.Telefono("Móvil", "987654322");
    personaEncontrada.agregarDireccion(nuevaDireccion);
    personaEncontrada.agregarMail(nuevoMail);
    personaEncontrada.agregarTelefono(nuevoTelefono);
    // Mostrar registros de persona modificados en la consola
    console.log("================================================================================================");
    console.log("Registros de Persona modificados:");
    agenda.forEach(function (persona) {
        console.log("================================================================================================");
        console.log(persona.obtenerDatos());
    });
}
