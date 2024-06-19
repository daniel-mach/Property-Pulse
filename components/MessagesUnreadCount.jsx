"use client";

import { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const UnreadMessagesCount = ({ session }) => {
  const { unreadCount, setUnreadCount } = useGlobalContext();

  useEffect(() => {
    if (!session) return;

    const fetchUnreadMessages = async () => {
      try {
        const response = await fetch("/api/messages/unread-count");

        if (response.status === 200) {
          const data = await response.json();
          setUnreadCount(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnreadMessages();
  }, [session]);

  return (
    unreadCount > 0 && (
      <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-white">
        {unreadCount}
      </span>
    )
  );
};

export default UnreadMessagesCount;
