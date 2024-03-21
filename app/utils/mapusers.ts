import User from '../interfaces/users';

export async function fetchRandomUserAPI(): Promise<User[]>{
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    const users = transformUsers(data);
    return users;
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
        picture: result.picture.large,
        relatives: []
    }));
    const usersWithRelatives = addRelatives(usersTransformed);
    return usersWithRelatives;
}

function addRelatives(users: User[]){
    const usersWithRelatives: User[] = users.map((user: User)=> {
        const min = Math.floor(Math.random() * 9)+1;
        const max = Math.floor(Math.random() * 9) + min;
        return <User>{ ...user, relatives: users.slice(min, max) }
    });
    return  usersWithRelatives;
}
