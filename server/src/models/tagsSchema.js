import mongoose ,{Schema} from "mongoose";

const TagsSchema = new Schema(
    {
        name : {type :String ,required: true},
    }
)

export default mongoose.model("topBikeTags",TagsSchema)