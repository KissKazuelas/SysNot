export interface User {
    users: UserElement[];
}

export interface UserElement {
    name:         string;
    email:        string;
    phone:        string;
    role:         string;
    UID?:          string;
    firebaseAuth?: boolean;
    enabled?:      boolean;
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

export interface UID {
    UID: string;
}
export interface SuccesLogin {
    role:  string;
    token: string;
    ok:    boolean;
}

export interface Rol{
    role: string;
}