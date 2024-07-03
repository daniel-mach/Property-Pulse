import MessageCard from "@/components/Message";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";
import { getSessionUser } from "@/utils/getSessionUser";

const MessagesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  const unreadMessages = await Message.find({
    recipient: userId,
    read: false
  })
    .sort({ createdAt: -1 })
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializeableObject(messageDoc);
    message.sender = convertToSerializeableObject(messageDoc.sender);
    message.property = convertToSerializeableObject(messageDoc.property);
    return message;
  });

  return (
    <div className="container m-auto max-w-6xl py-24">
      <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
        <h1 className="mb-4 text-3xl font-bold">Your Messages</h1>
        <div className="space-y-4">
          {messages.length === 0 ? (
            <p>You have no messages</p>
          ) : (
            messages.map((message) => (
              <MessageCard key={message._id} message={message} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
