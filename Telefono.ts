class Telefono {
    private _tipo: string;
    // string en lugar de number por que puede 
    // ser acompañado del código del país (ej. +34)
    private _numero: string; 
    
    constructor(tipo: string, numero: string) {
        this._tipo = tipo;
        this._numero = numero;
    }

    // Getters
    get tipo(): string {
        return this._tipo;
    }

    get numero(): string {
        return this._numero;
    }

    // Setters
    set tipo(tipo: string) {
        this._tipo = tipo;
    }

    set numero(numero: string) {
        this._numero = numero;
    }
}

export { Telefono };
