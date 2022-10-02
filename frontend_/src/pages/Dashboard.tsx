import React, { useEffect, useState } from 'react';
import httpClient from '../httpClient';
import { User } from '../types';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const logoutUser = async () => {
    const resp = await httpClient.post("//localhost:5000/logout");
    window.location.reload();
  }
  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.post("//localhost:5000/dashboard");
        setUser(resp.data);
      } catch (error) {
        console.log("Not Authorized");
        window.location.href = "/";
      }

    })();
  }, [])



  return (
    <div>

      <h1>Welcome to The Dashboard</h1>
      <br />
      {user != null && user.user_role!="student"? (
        <div>
          <h1>Students List</h1>
          <table>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Certificate</th>
              <th>Authorize</th>

            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Alfy@gmail.com</td>
              <td>certificate code</td>
              <td>Algosigner signing request</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Alfy@gmail.com</td>
              <td>certificate code</td>
              <td>Algosigner signing request</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Alfy@gmail.com</td>
              <td>certificate code</td>
              <td>Algosigner signing request</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Alfy@gmail.com</td>
              <td>certificate code</td>
              <td>Algosigner signing request</td>
            </tr>
          </table>
          <br />
          <a href="/logout">
            <button onClick={logoutUser}>Logout</button>
          </a>
        </div>
      ) : (
        <div>
          <p> You are not Authorized to view this page</p>
          <a href="/">
            <button onClick={logoutUser}>Logout</button>
          </a>

          <a href="/register">
            <button>Register</button>
          </a>
        </div >

      )}
    </div >

  )
}

export default Dashboard