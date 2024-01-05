import mongoose, { Schema } from 'mongoose'

const ServicesSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('services', ServicesSchema)
