import User from '../interfaces/users';

export async function fetchUsersFromLocalAPI(): Promise<User[]>{
  const response = await fetch('/api/users');
  const usersData = await response.json();
  return usersData.data;
}