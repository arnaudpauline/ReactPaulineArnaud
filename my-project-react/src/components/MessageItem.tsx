import styled from "@emotion/styled";


type Props = {
    text : string;
}

const MessageItem = ({text} : Props) => {
    return (
        <MessageBubble>{text}</MessageBubble>
    )
}

const MessageBubble = styled.div`
    border-radius: 2rem;
    background-color: #D6D6D6;
    margin: 15px 25rem 15px 50px;
    `


export default MessageItem;


