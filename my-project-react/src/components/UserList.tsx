import { User } from "../models/User"
import UserItem from "./UserItem";

type Props = {
    users: User[];
    onClick: (id: number) => void;
}

const UserList = ({ users, onClick }: Props) => (
    
    <div> 
        {users.map(({ name, avatar, id }) => 
        <UserItem
            key={id}
            name={name}
            avatar={avatar}
            onClick={() => {onClick(id)}}
        />
    )}
  </div>
)

export default UserList