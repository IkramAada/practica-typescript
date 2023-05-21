import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

// Crear registros de personas
const john = new Persona(
    "John",
    "Doe",
    25,
    "123456789",
    new Date(1998, 5, 15),
    "Azul",
    "Masculino",
    [
        new Direccion("Calle Principal", 123, 2, "A", "28001", "Madrid", "Madrid"),
    ],
    [
        new Mail("Personal", "john.doe@example.com"), 
        new Mail("Trabajo", "john.doe@company.com")],
    [
        new Telefono("Móvil", "123456789"), 
        new Telefono("Trabajo", "62354321")
    ],
    "Esta es una nota para John Doe."
);

const jane = new Persona(
    "Jane",
    "Smith",
    30,
    "987654321",
    new Date(1993, 8, 20),
    "Rojo",
    "Femenino",
    [
        new Direccion("Avenida Central", 456, 1, "B", "08001", "Barcelona", "Barcelona"),
        new Direccion("Glorita Andante", 40, 3, "A", "65784", "Barcelona", "Barcelona")
    ],
    [new Mail("Trabajo", "jane.smith@example.com")],
    [new Telefono("Trabajo", "987654321")],
    "Esta es una nota para Jane Smith."
);

const bob = new Persona(
    "Bob",
    "Johnson",
    40,
    "456123789",
    new Date(1983, 2, 10),
    "Verde",
    "Masculino",
    [
        new Direccion("Calle Secundaria", 789, 3, "C", "41001", "Sevilla", "Sevilla"),
    ],
    [new Mail("Personal", "bob.johnson@example.com")],
    [new Telefono("Casa", "456123789")],
    "Esta es una nota para Bob Johnson."
);

// Array de registros de persona
const agenda: Persona[] = [john, jane, bob];

// Mostrar registros de persona en la consola
console.log("================================================================================================");
console.log("Registros de Persona:");
agenda.forEach((persona) => {
  console.log("================================================================================================");
  console.log(persona.obtenerDatos());
});

// Modificar el registro de Jane
const dniBusqueda = "987654321";
const personaEncontrada = agenda.filter((persona) => persona.DNI === dniBusqueda)[0];

if (!personaEncontrada) {
    console.log("No se encontró ninguna persona con el DNI "+dniBusqueda); 
} else {
    const nuevaDireccion = new Direccion(
        "Calle Nueva",
        789,
        4,
        "D",
        "41002",
        "Sevilla",
        "Sevilla"
    );
    const nuevoMail = new Mail("Personal", "jane.smith.new@example.com");
    const nuevoTelefono = new Telefono("Móvil", "987654322");

    personaEncontrada.agregarDireccion(nuevaDireccion);
    personaEncontrada.agregarMail(nuevoMail);
    personaEncontrada.agregarTelefono(nuevoTelefono);

    // Mostrar registros de persona modificados en la consola
    console.log("================================================================================================");
    console.log("Registros de Persona modificados:");
    agenda.forEach((persona) => {
        console.log("================================================================================================");
        console.log(persona.obtenerDatos());
    });
}