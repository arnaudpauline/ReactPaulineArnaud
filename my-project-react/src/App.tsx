import { useState, useRef } from "react"; 
import UserList from "./components/UserList";
import styled from "@emotion/styled";
import UserItem from "./components/UserItem";
import { useUsers } from "./hooks/useUsers";
import { useUProfile } from "./hooks/useProfile";
import { useMessages } from "./hooks/useMessages";
import ConversationItem from "./components/ConversationItem";

const App = () => {
  const { profile, loading: profileLoading } = useUProfile();
  const { users, loading: usersLoading } = useUsers();
  const { messages, loading: messagesLoading, updateMessages, addMessage } = useMessages();
  const [inputValue, setInputValue] = useState('');
  const conversationRef = useRef(null);

  function handleClick(id: number){   
    updateMessages();
    // console.log("changement user", id, messages);  
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  function handleAddMessage(){
    if (inputValue.trim() !== '') {
      addMessage({ text: inputValue, id: generateUniqueId() });
      setInputValue('');
      setTimeout(scrollToBottom, 0);
    }
  }

  const generateUniqueId = () => {
    return Date.now();
  };
  
  const scrollToBottom = () => {
    console.log("test", conversationRef.current);
    if (conversationRef.current) {
      (conversationRef.current as HTMLDivElement).scrollTop = (conversationRef.current as HTMLDivElement).scrollHeight;
    }
  };
  

  if(profileLoading || usersLoading || !profile){
    return <div>loading</div>
  }

  return (
    <AppContainer>
      <LeftContainer>
        <UserListContainer>
          <UserList users={users} onClick={handleClick} />
        </UserListContainer>
        <UserProfilContainer>
          <UserItem name={profile.name} avatar={profile.avatar} />
        </UserProfilContainer>
      </LeftContainer>
      <ChatContainer>
        <ConversationItem conversation={messages} ref={conversationRef}></ConversationItem>
        <WriteContainer>
          <WriteInput type="text" value={inputValue} onChange={handleInputChange} />
          <SentButton onClick={handleAddMessage}>Envoyer</SentButton>
        </WriteContainer>
      </ChatContainer>
      
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
  margin:0;
  padding: 0;
`

const UserListContainer = styled.div`
  width: 16rem;
  border-right: 1px solid #bdbdbd;
  flex:1;
  overflow-y: scroll;
`
const UserProfilContainer = styled.div`
  height: 3rem;
  bottom: 0;
  left: 0;
  background-color: #fafafa;
  box-shadow: 0 14px 28 px rgba(0,0,0,0,0.1);
  width: 16rem;
`

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height:100vh;
`

const WriteContainer = styled.div`
  height: 3rem;
  width: 75%;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

const WriteInput = styled.input`
  height: 2rem;
  /* align-items: center; */
  /* margin-left: 1rem; */
  margin-right: 1rem;
  border-radius: 1rem;
  flex: 1;
`

const SentButton = styled.button`
  height: 2rem;
  border-radius: 1rem;
  width: 7rem;
  /* margin-left: 1rem; */
  
`

export default App
