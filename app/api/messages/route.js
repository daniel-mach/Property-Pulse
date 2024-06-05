import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB;

    const { email, phone, message, property, recipient } = request.json();

    const sessionUser = getSessionUser();

    if (!sessionUder || !sessionUser.user) {
      return new Response("User ID is required"), { status: 401 };
    }

    const { user } = sessionUser;

    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: "Can't send a message to yourself" }),
        { status: 400 }
      );
    }

    const newMessage = new Message({
      body: message,
      sender: user.id,
      email,
      phone,
      property,
      recipient
    });

    await newMessage.save();

    return new Response(JSON.stringify({ message: "Message sent" }), {
      status: 200
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
