import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    mainImage: { type: String, required: true }, 
    images: [{ type: String }], 
    price: { type: Number, required: true, min: 0 },
    discount: { type: Number, default: 0, min: 0, max: 100 },
    isOnSale: { type: Boolean, default: false },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeCategory' }], 
    // size: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeSize' }],
    // colors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeColor' }],
    // tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeTags' }],
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topBikeComments' }],
    colors: [{ type: String }], 
    sizes: [{ type: String }], 
    tags: [{ type: String }], 
    isNewBu: { type: Boolean, default: true }, 
    stock : {type : Number , default : 0 },
    isActive : {type : Boolean, default :true}
  },    
  { timestamps: true }
);

export default mongoose.model('topBikeProducts', ProductSchema);



