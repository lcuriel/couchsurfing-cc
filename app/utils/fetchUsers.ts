import User from '../interfaces/users';

export async function fetchUsersFromLocalAPI(): SetStateAction<User[]>{
  const response = await fetch('/api/users');
  const usersData = await response.json();
  return usersData.data;
}