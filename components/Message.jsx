"use client";

import Link from "next/link";
import { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";

const Message = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const { setUnreadCount } = useGlobalContext();

  const handleRead = async () => {
    try {
      const response = await fetch(`/api/messages/${message._id}`, {
        method: "PUT"
      });

      if (response.status === 200) {
        const { read } = await response.json();
        setIsRead(read);
        setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));

        if (read) {
          toast.success("Message marked as read");
        } else {
          toast.success("Message marked as new");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/messages/${message._id}`, {
        method: "DELETE"
      });

      if (response.status === 200) {
        setIsDeleted(true);
        setUnreadCount((prevCount) => prevCount - 1);
        toast.success("Message deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Message could not be deleted");
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="relative rounded-md border border-gray-200 bg-white p-4 shadow-md">
      {!isRead && (
        <div className="absolute right-4 top-4 rounded-md bg-yellow-500 px-2 py-1 text-white">
          New
        </div>
      )}
      <h2 className="mb-4 text-xl">
        <span className="font-bold">Property Inquiry: </span>
        {message.property.name}
      </h2>
      <p className="text-gray-700">{message.body}</p>
      <ul className="mt-4">
        <li>
          <strong>Name: </strong>
          {message.sender.username}
        </li>
        <li>
          <strong>Reply Email: </strong>
          <Link href={`mailto:${message.email}`} className="text-green-500">
            {message.email}
          </Link>
        </li>
        <li>
          <strong>Reply Phone: </strong>
          <Link href={`tel:${message.phone}`} className="text-green-500">
            {message.phone}
          </Link>
        </li>
        <li>
          <strong>Received: </strong>
          {message.createdAt.toLocaleString()}
        </li>
      </ul>
      <button
        onClick={handleRead}
        className={`mr-3 mt-4 rounded-md ${isRead ? "bg-gray-300" : "bg-green-500 text-white"} px-3 py-1 `}
      >
        {isRead ? "Mark As New" : "Mark As Read"}
      </button>
      <button
        onClick={handleDelete}
        className="mt-4 rounded-md bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default Message;
