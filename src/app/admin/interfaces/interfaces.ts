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

