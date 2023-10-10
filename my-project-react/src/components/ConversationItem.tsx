import styled from "@emotion/styled";
import { Message } from "../models/Message";
import MessageItem from "./MessageItem";
import { forwardRef } from "react";


type Props = {
    conversation?: Message[];
    // convLoading: boolean;
}

const ConversationItem = forwardRef<HTMLDivElement, Props>(
    ({ conversation }: Props, ref) => {
// const ConversationItem = ({ conversation } : Props) => {
    if(!conversation || conversation.length === 0){
        console.log("aucune conversation selectionne")
        return (
            <Conversation>
                <Titre>
                    Aucune conversation n'a été selectionné
                </Titre>
            </Conversation>
        );
    }
    console.log("une conversation de selectionne")
    return (
        <Conversation ref={ref}>
            {conversation!.map(({ id, text }) => 
                <MessageItem
                    key={id}
                    text={text}
                />
            )}
        </Conversation>
    );
    
}
);

const Conversation = styled.div`
    height: 2rem;
    flex:1;
    align-items: center;
    overflow-y: scroll;
    `
const Titre = styled.h3`
    margin-left: 50px;
`


export default ConversationItem;


