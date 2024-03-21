import User from "../interfaces/users";
import React from 'react';
import Link from "next/link";
import Image from 'next/image'

interface ListUsersProps {
  users: User[];
}

const ListUsers: React.FC<ListUsersProps> = ({ users }) => {
  return (
  <ul class="p-6 divide-y divide-slate-200 ">
    {users.map(user => (
      <li key={user.uuid}  class="flex py-4 first:pt-0 last:pb-0 hover:bg-sky-500 hover:ring-sky-500">
        <Link href={`/users/${user.id}`}>
          <Image src="{user.picture}" alt="{user.name}" src={user.picture} alt="" width={40} height={40} className="ml-3 h-10 w-10 rounded-full"/>
          <div class="ml-3 overflow-hidden">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
  );
};


export default ListUsers;