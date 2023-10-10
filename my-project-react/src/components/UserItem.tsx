import styled from "@emotion/styled";
import Cliquable from "./Cliquable";


type Props = {
    avatar : string;
    name: string;
    onClick?: () => void;
}

const UserItem = ({avatar, name, onClick}: Props) => {
    return (
    <Cliquable onClick={onClick}>
                <Avatar src={avatar} />
                <div>{name}</div>
            </Cliquable>)
}

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    `


export default UserItem;


