import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        { message: "You must be logged in to send a message" },
        { status: 401 }
      );
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
      name,
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
