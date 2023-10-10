import { useState } from "react"; 
import { Message } from "../models/Message";
import { getMessages } from "../services/api";

export const useMessages = () => {
  const [loading, setLoading ] = useState(true);
  const [messages, setMessages ] = useState<Message[]>([]);
  
  const updateMessages = (() => {
    setLoading(true);
    (async() => {
      const nextMessages = await getMessages();
      setMessages(nextMessages);
      setLoading(false);
    })()
  })

  const addMessage = async (newMessage: Message) => {
    setLoading(true);
    const nextMessages = [...messages, newMessage];
    setMessages(nextMessages);
    setLoading(false);
  };



  return { messages, loading, updateMessages, addMessage };
}



  // useEffect(() => {
  //   (async() => {          
  //     const nextMessages = await getMessages();
  //     setMessages(nextMessages);
  //     setLoading(false);
            
  //   })()
  // },[idUser])


  //1er essai *1
  // console.log("user1",idUser)
  // if(idUser !==  0){
  //   console.log("user2",idUser)
  //   useEffect(() => {
  //       (async() => {          
  //           const nextMessages = await getMessages();
  //           setConversation(nextMessages);
  //           setLoading(false);
          
  //       })()
  //   },[idUser])
  // }
  // return { conversation, loading };
  //1*
  //}