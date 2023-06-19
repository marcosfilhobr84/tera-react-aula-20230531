/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useEffect } from "react";

// import user1 from "../../images/placeholders/user-1.jpg";
// import user2 from "../../images/placeholders/user-2.jpg";
// import user3 from "../../images/placeholders/user-3.jpg";
import Default from "../templates/Default";
import Loading from "../atoms/Loading";
import User from "../molecules/User";

export default function Users() {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="users">
        <h1>Users</h1>

        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </Default>
  );
}
