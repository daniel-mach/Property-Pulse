import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "E-mail already in use."],
      required: [true, "E-mail required."]
    },
    username: {
      type: String,
      required: [true, "Username is required."]
    },
    image: {
      type: String
    },
    bookmarks: {
      type: Schema.Types.ObjectId,
      ref: "Property"
    }
  },
  {
    timestamps: true
  }
);

const User = models.User || model("User", UserSchema);

export default User;
