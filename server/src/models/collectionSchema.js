import mongoose, { Schema } from "mongoose"

const CollectionSchema = new Schema(
    {
        image : { type : String, required : true},
        collectionType : { type : String, required : true}
    },{timestamps : true}   
)

export default mongoose.model("collectionTopBike",CollectionSchema)