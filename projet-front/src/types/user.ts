export interface Role {
    id: number;
    name: string;
}

export interface User {
    id: string;
    firstName?: string;
    lastName?: string;
    emailAddress: string;
    username: string;
    password: string; // À ne pas stocker en front, utilisé uniquement pour la connexion
    tabRoles: Role[];
}

export interface AuthResponse {
    token: string;
    user: Omit<User, "password">;
}
