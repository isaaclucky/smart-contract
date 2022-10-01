import React, { useEffect, useState } from 'react';
import httpClient from '../httpClient';
import { User } from '../types';

const LandingPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const logoutUser = async () =>{
    const resp = await httpClient.post("//localhost:5000/logout");
    window.location.reload();
  }
  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.post("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not Authenticated");
      }

    })();
  }, [])
  return (
    <div>

      <h1>Welcome to The dApp Certification System</h1>
      <br />
      {user != null ? (
        <div>
          <h1>Logged in</h1>
          <h3>Email: {user.email}</h3>
          <h3>ID: {user.id}</h3>

          <a href="/logout">
          <button onClick={logoutUser}>Logout</button>
          </a>
        </div>
      ) : (
        <div>
          <p> You are not Logged in</p>
          <a href="/login">
            <button>Login</button>
          </a>
          <a href="/register">
            <button>Register</button>
          </a>
        </div >

      )}
    </div >

  )
}

export default LandingPage