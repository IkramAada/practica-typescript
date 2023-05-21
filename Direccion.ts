class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    // En algunos el CP países está compuesto por números 
    // y letras u otros carácteres como "-"
    private _codigoPostal: string; 
    private _poblacion: string;
    private _provincia: string;

    constructor(
        calle: string,
        numero: number,
        piso: number,
        letra: string,
        codigoPostal: string,
        poblacion: string,
        provincia: string
    ) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    // Getters
    get calle(): string {
        return this._calle;
    }

    get numero(): number {
        return this._numero;
    }

    get piso(): number {
        return this._piso;
    }

    get letra(): string {
        return this._letra;
    }

    get codigoPostal(): string {
        return this._codigoPostal;
    }

    get poblacion(): string {
        return this._poblacion;
    }

    get provincia(): string {
        return this._provincia;
    }

    // Setters
    set calle(calle: string) {
        this._calle = calle;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    set piso(piso: number) {
        this._piso = piso;
    }

    set letra(letra: string) {
        this._letra = letra;
    }

    set codigoPostal(codigoPostal: string) {
        this._codigoPostal = codigoPostal;
    }

    set poblacion(poblacion: string) {
        this._poblacion = poblacion;
    }

    set provincia(provincia: string) {
        this._provincia = provincia;
    }
}

export { Direccion };
