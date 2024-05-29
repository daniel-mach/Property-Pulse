"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkBookmarkStatus = async () => {
      try {
        const response = await fetch("/api/bookmarks/check", {
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
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    checkBookmarkStatus();
  }, [property._id, userId]);

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

  if (loading) return <p className="text-center"> Loading...</p>;

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
    >
      <FaBookmark className=" mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
    >
      <FaBookmark className=" mr-2" /> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
