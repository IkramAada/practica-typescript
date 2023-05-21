"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumple, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumple = cumple;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        // Getters
        get: function () {
            return this._nombre;
        },
        // Setters
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (DNI) {
            this._DNI = DNI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (cumple) {
            this._cumple = cumple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (colorFavorito) {
            this._colorFavorito = colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (direcciones) {
            this._direcciones = direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (telefonos) {
            this._telefonos = telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: false,
        configurable: true
    });
    // Agregar una dirección a la lista de direcciones
    Persona.prototype.agregarDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    // Agregar un correo electrónico a la lista de correos
    Persona.prototype.agregarMail = function (mail) {
        this._mails.push(mail);
    };
    // Agregar un teléfono a la lista de teléfonos
    Persona.prototype.agregarTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    // Obtener todos los datos de la persona en un objeto
    Persona.prototype.obtenerDatos = function () {
        return {
            nombre: this._nombre,
            apellidos: this._apellidos,
            edad: this._edad,
            DNI: this._DNI,
            cumpleaños: this._cumple,
            colorFavorito: this._colorFavorito,
            sexo: this._sexo,
            direcciones: this._direcciones,
            mails: this._mails,
            telefonos: this._telefonos,
            notas: this._notas,
        };
    };
    return Persona;
}());
exports.Persona = Persona;
