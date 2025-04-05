import React from "react";

interface UserProps {
  name: string;
  email: string;
}

const UserComponent: React.FC<UserProps> = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

export default UserComponent;
