"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in");
      return;
    }

    try {
      const response = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          propertyId: property._id
        })
      });

      if (response.status === 200) {
        const data = await response.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
    >
      <FaBookmark className=" mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
