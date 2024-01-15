import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String},
    age: { type: Number},
    avatar: { type: String},
    
    
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin"],
      default: "user",
    },
    basket: [
      {
        product: { type: Schema.Types.ObjectId, ref: "topBikeProducts" },
        count: { type: Number, default: 1 },
      },
    ],
    wishlist: [{product: { type: mongoose.Schema.Types.ObjectId, ref: 'topBikeProducts' }}],
    comments: [ { comment :{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeComments' }}],
    isVerified : {type : Boolean , default : false}

  },
  { timestamps: true }
);

const User = mongoose.model('topBikeUser', UserSchema);

export default User