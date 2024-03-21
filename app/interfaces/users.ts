interface User {
    id: number;
    uuid: string;
    prefix: string;
    name?: string;
    address?: string;
    location?: string;
    country?:  string;
    zipcode?: string;
    email?: string;
    phone?: string;
    cell?: string;
    picture?: string;
    relatives?: User[];
}

export default User;