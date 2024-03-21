import User from "../interfaces/users";
import React from 'react';

interface DetailsUserProps {
  user: User;
}

const DetailsUser: React.FC<DetailsUserProps> = ({ user }) => {
  return (
      <div>
          <h1>USER DETAILS</h1>
          <h2>{user.prefix} {user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.address}, {user.location}, {user.zipcode} {user.country}</p>

      </div>
  );
}

export default DetailsUser;