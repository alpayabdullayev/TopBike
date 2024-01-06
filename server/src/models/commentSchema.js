import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'topBikeUser', required: true },
  news: { type: mongoose.Schema.Types.ObjectId, ref: 'News', required: true },  
  
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment; 