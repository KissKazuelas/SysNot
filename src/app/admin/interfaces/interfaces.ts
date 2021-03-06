export interface User {
    users: UserElement[];
}

export interface UserElement {
    name:         string;
    email:        string;
    phone:        string;
    role:         string;
    firebaseAuth?: boolean;
    enabled?:      boolean;
    UID:           string;
}

export interface SuccesAddUser {
    ok:   boolean;
    user: UserStatus;
}

export interface UserStatus {
    _writeTime: WriteTime;
}

export interface WriteTime {
    _seconds:     number;
    _nanoseconds: number;
}

export interface DeleteStatus{
    ok: string;
    UID : string;
} 

export interface ClienteInterface {
    nombre: string,
    tipo: string,
    telefono: string
}

export interface ClienteApi {
    id:   string;
    data: DataClient;
}

export interface DataClient {
    telefono: string;
    nombre:   string;
    tipo:     string;
}

export interface SuccesAddClient{
    ok: string;
    id: string;
}

export interface Tramite {
    nombreTramite: string;
    idCliente: string;
    UIDAbogado: string;
}

export interface TramitesApi {
    id:   string;
    data: TramiteApi;
}

export interface TramiteApi {
    status:           boolean;
    name:             string;
    ultimoMovimiento: string;
    abogadoUID:       string;
    initDate:         string;
    clientId:         string;
}
export interface TramiteStatus{
    initDate:         string;
    clientId:         string;
    status:           boolean;
    ultimoMovimiento: string;
    name:             string;
    abogadoUID:       string;
}

export interface UserUpdate {
    name:  string;
    UID:   string;
    phone: string;
}
