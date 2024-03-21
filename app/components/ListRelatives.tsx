import User from "../interfaces/users";
import React from 'react';
import ListUsers from "./ListUsers";

const ListRelatives: React.FC<Relatives> = ({ relatives }) => {
  const usersToDisplay: User[] = relatives
  return (
    <div>
      Relatives:
      <ListUsers users={relatives} />
    </div>
  );
};


export default ListRelatives;