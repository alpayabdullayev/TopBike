import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'topBikeUser', required: true },
  news: { type: mongoose.Schema.Types.ObjectId, ref: 'News', required: true },  
  
});


export default mongoose.model("topBikeComments",CommentSchema); 