import User from '../interfaces/users';

export async function findUser(users: User[]): Promise<User>{
  const response = await fetch('/api/users');
  const usersData = await response.json();
  return usersData.data;
}