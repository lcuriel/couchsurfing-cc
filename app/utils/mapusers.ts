import User from '../interfaces/users';

export async function fetchRandomUserAPI(): Promise<User[]>{
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const users = transformUsers(data);
    addRelatives(users);
    return addRelatives(users);
}

export function transformUsers(data: any[]){
    const usersTransformed: User[] = data.results.map((result: any, index: number) => ({
        id: index + 1,
        uuid: result.login.uuid,
        prefix: result.name.title,
        name: `${result.name.first} ${result.name.last}`,
        address: `${result.location.street.number} ${result.location.street.name}`,
        location: `${result.location.city}, ${result.location.state}`,
        zipcode: result.location.postcode,
        country: result.location.country,
        email: result.email,
        phone: result.phone,
        cell: result.cell,
        picture: result.picture.medium,
        relatives: []
    }));
    return usersTransformed;
}

function addRelatives(users: Users[]){
    return users;
}
