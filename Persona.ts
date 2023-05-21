import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumple: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        DNI: string,
        cumple: Date,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string
    ) {
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

    // Getters
    get nombre(): string {
        return this._nombre;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get edad(): number {
        return this._edad;
    }

    get DNI(): string {
        return this._DNI;
    }

    get cumple(): Date {
        return this._cumple;
    }

    get colorFavorito(): string {
        return this._colorFavorito;
    }

    get sexo(): string {
        return this._sexo;
    }

    get direcciones(): Direccion[] {
        return this._direcciones;
    }

    get mails(): Mail[] {
        return this._mails;
    }

    get telefonos(): Telefono[] {
        return this._telefonos;
    }

    get notas(): string {
        return this._notas;
    }

    // Setters
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    set DNI(DNI: string) {
        this._DNI = DNI;
    }

    set cumple(cumple: Date) {
        this._cumple = cumple;
    }

    set colorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    set direcciones(direcciones: Direccion[]) {
        this._direcciones = direcciones;
    }

    set mails(mails: Mail[]) {
        this._mails = mails;
    }

    set telefonos(telefonos: Telefono[]) {
        this._telefonos = telefonos;
    }

    set notas(notas: string) {
        this._notas = notas;
    }

    // Agregar una dirección a la lista de direcciones
    agregarDireccion(direccion: Direccion): void {
        this._direcciones.push(direccion);
    }

    // Agregar un correo electrónico a la lista de correos
    agregarMail(mail: Mail): void {
        this._mails.push(mail);
    }

    // Agregar un teléfono a la lista de teléfonos
    agregarTelefono(telefono: Telefono): void {
        this._telefonos.push(telefono);
    }

    // Obtener todos los datos de la persona en un objeto
    obtenerDatos(): any {
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
    }
}

export { Persona };
