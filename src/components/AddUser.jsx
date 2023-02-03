import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/userReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="addUser">
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
          dispatch(
            addUser({
              // id: users.length ? users[users.length - 1].id + 1 : 1,
              id: users.length + 1,
              name,
              username,
            })
          )
        }
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
