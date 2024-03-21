'use client';
import { useEffect, useState } from "react";
import ListUsers from './components/ListUsers'


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
        const response = await fetch('/api/users', { cache: 'force-cache' });
        const usersData = await response.json();
        setUsers(usersData.data);
    }

    fetchUsers();
}, []);

  return (
    <main>
      <h1>Users</h1>
      <ListUsers users={users} />
    </main>
  );
}
