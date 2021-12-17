import { Button } from "@mui/material";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";

function ChatInput({ channelName, channelId }) {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) return false;

    const docData = {
      message: input,
      timestamp: serverTimestamp(),
      user: "Taffo Alshammaa",
      userImage: "",
    };

    await setDoc(doc(collection(db, "rooms", channelId, "messages")), docData);

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
