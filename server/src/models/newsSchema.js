import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'topBikeUser', required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "topBikeCategory" }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "topBikeTags" }],
},{timestamps : true});

const News = mongoose.model('News', newsSchema);

export default News;
