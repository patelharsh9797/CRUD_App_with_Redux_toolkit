import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, deleteUser } from "../reducers/userReducer";

import { nanoid } from "nanoid";

const DisplayUser = () => {
  const users = useSelector((state) => state.users);
  return (
    <div className="displayUser">
      {users.map((user) => (
        <User key={nanoid()} user={user} />
      ))}
    </div>
  );
};

const User = ({ user }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="user">
      <h3>
        {user.name} : {user.username}
      </h3>
      <div className="userUpdate">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="userName"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            // dispatch(addUser({ id: users.length + 1, name, username }))
            dispatch(updateUser({ id: user.id, name, username }))
          }
        >
          Update
        </button>
        <button
          onClick={() =>
            // dispatch(addUser({ id: users.length + 1, name, username }))
            dispatch(deleteUser({ id: user.id }))
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayUser;
