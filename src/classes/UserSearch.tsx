import { Component, ReactNode } from "react";

interface IUser {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: IUser[];
}

interface UserSearchState {
  name: string;
  user: IUser | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({ user: foundUser });
  };

  render(): ReactNode {
    const { user, name } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>{user?.name}</div>
        <div>{user?.age}</div>
      </div>
    );
  }
}

export default UserSearch;
