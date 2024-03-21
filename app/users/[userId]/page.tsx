'use client';
import React from 'react'  
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import ListRelatives from '../../components/ListRelatives';

const page = ({ params }: { params:{ userId: string } }) => {  
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
        const response = await fetch('/api/users', { cache: 'force-cache' });
        const usersData = await response.json();
        const user = usersData.data[params.userId-1];
        setUser(user);
    }

    getUser();
}, []);


  return (
    <>
    <div className="mt-8 ml-10">
      <Link href={`/`} className="ml-5"> Back </Link>

      <div className="p-5 border rounded text-center text-gray-500 max-w-sm bg-white mt-7">
        <Image src="{user.picture}" alt="{user.name}" src={user.picture} alt="" width={128} height={128} class="w-32 h-32 rounded-full mx-auto"/>
        <div className="text-sm mt-5">
          {user.name}
          <p>{user.email}</p>
        </div>
        <p className="mt-2 text-sm text-gray-900">
          {user.address}, {user.location}, {user.country}, {user.zipcode}
        </p>
        <p className="mt-2 text-sm text-gray-900">
        Particular: {user.phone} Cell: {user.cell}
        </p>
        <ListRelatives relatives={user.relatives} />
      </div>
    </div>
    </>
  )
}

export default page