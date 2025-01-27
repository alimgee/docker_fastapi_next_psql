"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic'
 


const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://0.0.0.0:8000/users/');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
