import mongoose ,{Schema} from "mongoose";

const ColorSchema = new Schema(
    {
        name : {type :String ,required: true},
    }
)

export default mongoose.model("topBikeColor",ColorSchema)