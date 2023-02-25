import React from "react";
import { Props } from "./types";

function AppDetails({ data }: Props) {
  const {
    logo,
    admin,
    name,
    company,
    number_of_users,
    number_of_active_users,
    server_address,
  } = data;
  return (
    <tr style={{ backgroundColor: "lightgray" }}>
      <td />
      <td>
        <img srcSet={logo} alt="app logo" />

        <h1>{name}</h1>
        <h2>{company}</h2>
      </td>
      <td>
        <h3>Details:</h3>
        <p>
          <b>number of users:</b> {number_of_users}
        </p>
        <p>
          <b>number of active users:</b> {number_of_active_users}
        </p>
        <p>
          <b>server address:</b> {server_address}
        </p>
      </td>
      <td>
        <h3>Admin:</h3>
        <p>
          <b>First name</b> {admin.first_name}
        </p>
        <p>
          <b>Last name</b> {admin.last_name}
        </p>
        <p>
          <b>e-mail</b> {admin.email}
        </p>
      </td>
    </tr>
  );
}

export default AppDetails;
