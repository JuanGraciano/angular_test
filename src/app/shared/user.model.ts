export class UserItem {
    public id: number;
    public nombre: string;
    public email: string;
    public website: string;
    public comentario: string;

    constructor(id: number = 0, nombre: string = "", email: string = "", website: string = "", comentario: string = "") {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.website = website;
        this.comentario = comentario;
    };

    // constructor() {
    // };



}
