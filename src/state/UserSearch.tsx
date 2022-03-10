import { useState } from "react";

interface IUser {
  name: string;
  age: number;
}

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 20,
  },
  {
    name: "Michael",
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<IUser | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
