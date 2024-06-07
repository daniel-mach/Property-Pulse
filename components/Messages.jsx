"use client";

import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch("/api/messages");

        if (response.status === 200) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.log("Error fetching messages: ", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  return <div>Messages</div>;
};

export default Messages;
